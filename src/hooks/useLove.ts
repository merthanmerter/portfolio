import { useClientEffect$, useStore } from "@builder.io/qwik"

export const useLove = ({
    love = [],
    hero = [],
    speed = 500,
}: {
    name: string
    love: string[]
    hero: string[]
    speed?: number
}) => {
    const store = useStore({
        count: 0,
        love: love,
        hero: hero,
    })

    useClientEffect$(({ track }) => {
        track(store, 'count')

        const loveInterval = setInterval(() => {
            store.count = store.count == store.love.length - 1 ? (store.count = 0) : store.count + 1
        }, speed)

        const heroInterval = setInterval(() => {
            store.count = store.count == store.hero.length - 1 ? (store.count = 0) : store.count + 1
        }, speed)

        return () => {
            clearInterval(loveInterval)
            clearInterval(heroInterval)
        }
    })

    return {
        love: store.love[store.count],
        hero: store.hero[store.count],
    }
}
