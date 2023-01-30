export const tagIsDate = (tag: string) =>
    ['day', 'month', 'year'].includes(`${tag.split(':').at(0)}`)

export const getTagColor = (tag: string) => {
    if (tagIsDate(tag))
        return 'warning'

    return ''
}

export const displayTag = (tag: string) =>
    `${tag.split(':').at(-1)}`

export const titleFromTags = (tagString: string) => {
    const rawTags = tagString.split(', ')
    const rawDateTags = rawTags.filter(tag => tagIsDate(tag))
    const normalTags = rawTags.filter(tag => !tagIsDate(tag))

    // If it works and it's stupid, it's not stupid
    const dateTags: string[] = []
    for(const yearTag of rawDateTags.filter(tag => tag.split(':')[0] === 'year')){
        for(const monthTag of rawDateTags.filter(tag => tag.split(':')[0] === 'month')){
            for(const dayTag of rawDateTags.filter(tag => tag.split(':')[0] === 'day')){
                const day = dayTag.split(':')[1]
                const month = monthTag.split(':')[1]
                const year = yearTag.split(':')[1]
                dateTags.push(`${month} ${day}, ${year}`)
            }
        }
    }
    return [ ... normalTags, ... dateTags ]
}