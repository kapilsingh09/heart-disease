export default async function predictHeart(data) {
    try {
        const response = await fetch(`${process.env.data_yha_hai}/predict`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Network error");
        }
        console.log(response);

        const result = await response.json();
        // console.log(result);

        return result.prediction;

    } catch (error) {
        console.log("Error", error);
        return "Error: Could not get prediction";
    }
}