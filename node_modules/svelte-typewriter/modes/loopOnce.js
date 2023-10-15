import { animationSetup } from '../helpers/animationSetup'
import { writeEffect } from '../helpers/writeEffect'
import { typingInterval } from '../helpers/typingInterval'
import { unwriteEffect } from '../helpers/unwriteEffect'
import { runOnEveryParentUntil } from '../helpers/runOnEveryParentUntil'

const loopOnce = async (node, props) => {
	const { options, elements } = animationSetup(node, props)

	for (const element of elements) {
		const { currentNode, text } = element

		await writeEffect(element, options)
		const textWithUnescapedAmpersands = text.replaceAll('&', '&amp;')

		const fullyWritten = currentNode.innerHTML === textWithUnescapedAmpersands

		if (fullyWritten) {
			options.dispatch('done')
			await typingInterval(options.wordInterval)

			const isLastElement = elements.indexOf(element) === elements.length - 1

			if (!isLastElement) {
				await unwriteEffect(currentNode, options)
				runOnEveryParentUntil(currentNode, options.parentElement, element => {
					currentNode === element
						? element.classList.remove('typing')
						: element.classList.remove('finished-typing')
				})
			}

			runOnEveryParentUntil(currentNode, options.parentElement, element => {
				const cursorHasTimeout = typeof options.keepCursorOnFinish === 'number'
				cursorHasTimeout &&
					setTimeout(() => {
						element.classList.replace('typing', 'finished-typing')
					}, options.keepCursorOnFinish)
			})
		}
	}
}

export default loopOnce
