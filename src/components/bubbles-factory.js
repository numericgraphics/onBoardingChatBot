import React, { useMemo, useEffect, useState, cloneElement, memo, Fragment } from 'react'

const BubblesFactory = ({
    data,
    bubble
}) => {
    const [bubbles, setBubbles] = useState([])
    const [index, setIndex] = useState(null)
    const componentsLength = useMemo(() => { return data?.content.length }, [data])

    useEffect(() => {
        let count = 0
        const interval = setInterval(() => {
            if (count === componentsLength) {
                stopBubbles()
                clearInterval(interval)
            } else {
                setIndex(count)
                count++
            }
        }, 1000)
    }, [])

    useEffect(() => {
        if (index !== null) {
            setBubbles([
                ...bubbles,
                data?.content[index]
            ])
        }
    }, [index])

    const stopBubbles = () => {
        console.log('stopBubbles', data?.nextAction)
    }

    return (
        <Fragment>
            {bubbles.map((component, index) => {
                return cloneElement(bubble, {
                    key: index,
                    data: component
                })
            })}
        </Fragment>
    )
}

export default memo(BubblesFactory)
