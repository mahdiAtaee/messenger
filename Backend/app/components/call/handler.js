exports.finishCall = async (req, res) => {
    const { chatID } = req.body;
    let chat = await Chat.findOne({ _id: chatID }).exec();
    if (chat && chat.is_finished) {
        return res.send({
            success: true,
            message: 'تماس قبلا به پایان رسیده است'
        });
    }
    if (!chat) {
        return res.status(422).send({
            success: false,
            message: 'تماسی با این مشخصات در سیستم وجود ندارد'
        });
    }
    return res.send({
        success: true,
        message: 'تماس با موفقیت به پایان رسید'
    });
  };