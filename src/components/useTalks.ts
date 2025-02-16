import type { MarkdownInstance } from "astro";

export function useTalks(talks: MarkdownInstance<Record<string, any>>[]):Record<string, any>
{
    let talkMap = new Map();
    talks.forEach( (talk) =>
    {
        const trainerName = talk.url?.replace("/talks/", "");
        talkMap.set(trainerName, talk.frontmatter);
    });
    return(Object.fromEntries(talkMap));
}