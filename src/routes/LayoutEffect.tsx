import React, { useLayoutEffect, useEffect, useState } from 'react';

// useEffectでは一瞬100→0となる。画面に描画された値がuseEffect内の処理が実行される動作となっております。
// useLayoutEffctフックでは画面が描写される前に実行されるので、初期値である（100）が画面に表示されることはなく0が表示されます。
// useLayoutEffectフックが同期的に呼び出されるので、コンポーネントがマウントされる前に状態が更新されます。

// 注意点
// useLayoutEffectは同期的であるため、使用する場合は注意が必要となります。
// useLayoutEffect内での重い計算は、UI全体を停止させることなく、その処理が完了するまでに描画の変更が行われます。
// UIの停止や一時停止は起こらず、他のタスクや処理も続行されます。
// つまり、useLayoutEffectは、DOMの更新直後に同期的な計算を行うため、その処理が重い場合やパフォーマンスの問題がある場合には、画面の描画に影響を及ぼす可能性があります。
// そのため、できるだけ軽量な計算に留めるか、useEffectを選択することも考慮すべきです。また、useLayoutEffectはサーバーサイドレンダリング（SSR）の際にも問題を引き起こす可能性があるため、その点も注意が必要です。

const LayoutEffect = () => {
    const [count, setCount] = useState(100);

    // useEffect(() => {
    //     setCount(0);
    // }, []);

    useLayoutEffect(() => {
        setCount(0);
    }, []);

    return (
        <>
            <div>LayoutEffect</div>
            <div>{count}</div>
        </>
    )
}
export default LayoutEffect;