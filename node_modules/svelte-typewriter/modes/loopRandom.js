import { writeAndUnwriteText } from '../helpers/writeAndUnwriteText'
import { getRandomElement } from '../helpers/getRandomElement'
import { animationSetup } from '../helpers/animationSetup'
import { makeNestedStaticElementsVisible } from '../helpers/makeNestedStaticElementsVisible'

const loopRandom = async (node, props) => {
	const { options, elements } = animationSetup(node, props)

	while (true) {
		makeNestedStaticElementsVisible(node)
		const element = getRandomElement(elements)
		await writeAndUnwriteText(element, options)
	}
}

export default loopRandom
