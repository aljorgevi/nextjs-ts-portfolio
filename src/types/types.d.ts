export type ProjectType = 'web' | 'project' | 'all'

export type Project = {
	title: string
	description: string
	image: string
	linkLive: string
	linkRepo: string
	type: ProjectType
}
