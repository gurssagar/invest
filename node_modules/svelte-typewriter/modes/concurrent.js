import { getLongestTextElement } from '../helpers/getLongestTextElement'
import { writeEffect } from '../helpers/writeEffect'
import { onAnimationEnd } from '../helpers/onAnimationEnd'
import { animationSetup } from '../helpers/animationSetup'

// the name "default" cannot be used due to being a js keyword
const concurrent = (node, props) => {
	const { options, elements } = animationSetup(node, props)

	const lastElementToFinish = getLongestTextElement(elements)
	onAnimationEnd(lastElementToFinish, () => options.dispatch('done'))

	for (const element of elements) {
		// "then" is required here to prevent blocking execution, thus keeping
		// the animation asynchronous
		writeEffect(element, options).then(() => {
			if (options.keepCursorOnFinish) {
				const isNotLongestElement = element.currentNode !== lastElementToFinish
				isNotLongestElement
					? element.currentNode.classList.replace('typing', 'finished-typing')
					: options.dispatch('done')
			} else {
				element.currentNode.classList.replace('typing', 'finished-typing')
			}

			const cursorHasTimeout = typeof options.keepCursorOnFinish === 'number'
			cursorHasTimeout &&
				setTimeout(() => {
					element.currentNode.classList.replace('typing', 'finished-typing')
				}, options.keepCursorOnFinish)
		})
	}
}

export default concurrent
