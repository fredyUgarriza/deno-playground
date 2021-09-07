function wait(ms) {
    return new Promise(res => setTimeout(res, ms));
}
async function fail() {
    throw new Error('you should have handled me');
}

async function run() {
    setTimeout(
        async () => {
            await fail();
        },
        5000)
    while(true) {
        console.log('I\'m still alive');
        await wait(1000);
    }
} 

run()
