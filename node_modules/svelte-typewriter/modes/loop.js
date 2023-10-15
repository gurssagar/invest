import { writeAndUnwriteText } from '../helpers/writeAndUnwriteText'
import { animationSetup } from '../helpers/animationSetup'
import { makeNestedStaticElementsVisible } from '../helpers/makeNestedStaticElementsVisible'

const loop = async (node, props) => {
	const { options, elements } = animationSetup(node, props)

	while (true) {
		makeNestedStaticElementsVisible(node)
		for (const element of elements) await writeAndUnwriteText(element, options)
	}
}

export default loop
