import '~/lib/Lute.min'

export function useRender(md: string) {
    // @ts-ignore
    const lute = Lute.New()

    const renderers = {
    }

    lute.SetJSRenderers({
        renderers: {
            Md2HTML: renderers
        },
    })

    return lute.MarkdownStr("", md)
}