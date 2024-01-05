const { Client } = require('discord.js-selfbot-v13');
require('dotenv').config()
const client = new Client({
    // See other options here
    // https://discordjs-self-v13.netlify.app/#/docs/docs/main/typedef/ClientOptions
    // All partials are loaded automatically
});
async function sleep(second) {
    return new Promise(resolve => setTimeout(resolve, second * 1000));
}
let dmcs = true;

client.on('messageCreate', async (message) => {
    if (message.author.id !== client.user.id) return;
    if (message.content.toLowerCase() === 'owobanbypass') {
        try {
            await message.delete();
            await message.channel.send('owobanbypass is now **enabled**!');
            dmcs = true;
            while (dmcs) {
                await message.channel.send('ouse 53 67 74');
                await sleep(5);
                await message.channel.send('owo');
                console.log('succefully owo');
                await message.channel.send('owoh');
                console.log('succefully owoh');
                await message.channel.send('owob');
                console.log('succefully owob');
                await sleep(5);
                await message.channel.send('owo flip t 500');
                console.log('succefully owo flip t 500');
                await message.channel.send('owo cash');
                console.log('succefully cash');
                await sleep(11);
                await message.channel.send('owo');
                console.log('succefully owo');
                await message.channel.send('owoh');
                console.log('succefully owoh');
                await message.channel.send('owob');
                console.log('succefully owob');
                await sleep(5);
                await message.channel.send('owo flip h 500');
                console.log('succefully owo flip h 500');
                await message.channel.send('owo cash');
                console.log('succefully cash');
                await sleep(11);
                await message.channel.send('owo');
                console.log('succefully owo');
                await message.channel.send('owoh');
                console.log('succefully owoh');
                await message.channel.send('owob');
                console.log('succefully owob');
                await sleep(5);
                await message.channel.send('owo flip t 500');
                console.log('succefully owo flip t 500');
                await message.channel.send('owo cash');
                console.log('succefully cash');
                await sleep(11);
                await message.channel.send('owo');
                console.log('succefully owo');
                await message.channel.send('owoh');
                console.log('succefully owoh');
                await message.channel.send('owob');
                console.log('succefully owob');
                await sleep(5);
                await message.channel.send('owo flip h 500');
                console.log('succefully owo flip h 500');
                await message.channel.send('owo cash');
                console.log('succefully cash');
                await sleep(11);
                await message.channel.send('owo');
                console.log('succefully owo');
                await message.channel.send('owoh');
                console.log('succefully owoh');
                await message.channel.send('owob');
                console.log('succefully owob');
                await sleep(5);
                await message.channel.send('owo flip t 500');
                console.log('succefully owo flip t 500');
                await message.channel.send('owo cash');
                console.log('succefully cash');
                await sleep(90);
                if(!dmcs) {
                    console.log('owobanbypass is now disabled!');
                    break;
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    if (message.content.toLowerCase() === 'autoowostop') {
        try {
            await message.delete();
            await message.channel.send('owobanbypass is now **disabled**!');
            dmcs = false;
        } catch (error) {
            console.log(error);
        }
    }
});
client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);
})

client.login(process.env.TOKEN);