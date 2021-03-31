import TelegramBot from 'node-telegram-bot-api';

export default (req, res) => {

  if(req.method === 'POST') {

    var message = `Host: ${process.env.NEXT_PUBLIC_SITE_NAME}\n\n`
        message += `De: ${req.body.body.name} \n`
        message += `Email: ${req.body.body.email} \n`
        message += `Mensagem: ${req.body.body.message}`

    const bot = new TelegramBot(process.env.NEXT_PUBLIC_TELEGRAM_TOKEN);
    bot.sendMessage(process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,message,{parse_mode : "HTML"});

    return res.status(200).json({message:'sucess'})
  }

  return res.status(200).json({ name: 'John Doe' })
}
