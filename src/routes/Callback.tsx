import React, {useCallback} from 'react'

const Callback  = () => {
    const sample1 = useCallback((value: number) => {
        console.log(value);
    }, [])
    return (
        <>
            <div>callback</div>
        </>
    )
}

export default Callback