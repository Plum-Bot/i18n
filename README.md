# I18n

[![Bot Badge](https://img.shields.io/static/v1?label=bot&message=Plum&logo=DISCORD&logoColor=white&color=c44040)](https://plum-bot.xyz) [![Discord Badge](https://discord.com/api/guilds/689149132371263604/widget.png?style=shield)](https://discord.gg/MDtgmEM)

Manages the translation files used by Plum. They're downloaded every reboot.

## Contributing

To help translate Plum, clone this repository and check if the folder of the language
you're translating exists.
If it doesn't, copy the folder `en-US` and rename it as the ISO 639-1 code formatted as:
`lang-REGION` (example: `it-IT`). If it does, don't do anything.

Enter the folder and check out the YML files. Each YML is made like this:

```yaml
# Comment to explain
KEY: Value, with a {{placeholder}}
KEY_WITH_OBJECTS:
    NESTED_KEY:
        - Array values
        - Start with
        - a dash
    ANOTHER_KEY: This key is nested
```

As per the YML spec, indentation is important.

DON'T rename the files and DON'T edit the keys names, otherwise it won't work. `{{placeholder}}`s
are also values that shouldn't be edited, they'll be replaced at runtime.

Lines that start with a hash sign (`#`) are just comments
to provide more context or an explanation for a better understanding of the meaning of the translations.
They can be safely removed in the translations.

Once you're done translating, just send a pull request. If it's accepted, you'll see your
changes on the next reboot of the bot.

Obviously, don't forget to [join our Discord!](https://discord.gg/MDtgmEM)

By the way, if you help translating Plum, you'll get **1 month of free Premium!** Join!