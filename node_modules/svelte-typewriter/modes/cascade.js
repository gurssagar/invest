import { writeEffect } from '../helpers/writeEffect'
import { cleanChildText } from '../helpers/cleanChildText'
import { animationSetup } from '../helpers/animationSetup'

const cascade = async (node, props) => {
	const { options, elements } = animationSetup(node, props)

	cleanChildText(elements)

	for (const element of elements) {
		await writeEffect(element, options)

		if (options.keepCursorOnFinish) {
			const isLastElement = elements.indexOf(element) === elements.length - 1
			!isLastElement && element.currentNode.classList.replace('typing', 'finished-typing')
		} else {
			element.currentNode.classList.replace('typing', 'finished-typing')
		}

		const cursorHasTimeout = typeof options.keepCursorOnFinish === 'number'
		cursorHasTimeout &&
			setTimeout(() => {
				element.currentNode.classList.replace('typing', 'finished-typing')
			}, options.keepCursorOnFinish)
	}

	options.dispatch('done')
}

export default cascade
