import React, {useEffect, useState} from 'react'

    function useAsyncHook() {
        const [result, setResult] = useState([]);
        const [loading, setLoading] = useState("false");
        useEffect(() => {
            async function fetchList() {
                try {
                    setLoading("true");
                    const response = await fetch(
                        `http://localhos:8080/api/boards`
                    );

                    const json = await response.json();
                    // console.log(json);
                    setResult(result.json)

                } catch (error) {
                    setLoading("null");
                }
            }

        }, []);

        return [result, loading];
    }

export default useAsyncHook