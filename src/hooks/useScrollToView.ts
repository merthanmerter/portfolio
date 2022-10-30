import { $, Ref, useClientEffect$, useOnWindow, useStore } from "@builder.io/qwik"

export function useScrollToView({
	skillsRef,
	projectsRef,
	workflowRef,
}: {
	skillsRef: Ref<Element>
	projectsRef: Ref<Element>
	workflowRef: Ref<Element>
}) {
	const visible = useStore({
		y: 0,
		skills: false,
		projects: false,
		workflow: false,
	})

	const handleScroll = $(() => {
		const windowHeight = window.innerHeight

		const checkVisible = (element: DOMRect | undefined) => {
			if (element) {
				return element.top <= windowHeight * 0.75 && element.bottom >= windowHeight * 0.25
			}
		}

		if (skillsRef.current) {
			const skills = skillsRef.current.getBoundingClientRect()
			checkVisible(skills) && (visible.skills = true)
		}
		if (projectsRef.current) {
			const projects = projectsRef.current.getBoundingClientRect()
			checkVisible(projects) && (visible.projects = true)
		}
		if (workflowRef.current) {
			const workflow = workflowRef.current.getBoundingClientRect()
			checkVisible(workflow) && (visible.workflow = true)
		}
	})

	useClientEffect$(() => handleScroll())
	useOnWindow('scroll', handleScroll)

	return visible
}