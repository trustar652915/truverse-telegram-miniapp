print("Starting bot...")

from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

BOT_TOKEN = '8397198195:AAHvk_rYe0-peYUkeTB63PCZD29KK3fO2nM'
MINI_APP_URL = 'https://truverse-telegram-miniapp-git-main-trustar652915s-projects.vercel.app/'

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton("Open Mini App", web_app={'url': MINI_APP_URL})]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text(
        'Click the button below to open the Mini App:',
        reply_markup=reply_markup
    )

if __name__ == '__main__':
    app = ApplicationBuilder().token(BOT_TOKEN).build()
    app.add_handler(CommandHandler('start', start))
    app.run_polling()
