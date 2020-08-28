# I18n

[![Bot Badge](https://img.shields.io/static/v1?label=bot&message=Plum&logo=DISCORD&logoColor=white&color=c44040)](https://plum-bot.xyz) [![Discord Badge](https://discord.com/api/guilds/689149132371263604/widget.png?style=shield)](https://discord.gg/MDtgmEM)

Manages the translation files used by Plum. They're downloaded every reboot.

## Contributing

To help translate Plum, clone this repository and check if the folder of the language
you're translating exists.
If it doesn't, copy the folder `en_US` and rename it as the ISO 639-1 code formatted as:
`lang_REGION` (example: `it_IT`). If it does, don't do anything.

Enter the folder and check out the JSON files. Each JSON is made like this:

```json
{
    "KEY": "Value, with a {{placeholder}}"
}
```

DON'T rename the files and DON'T edit the keys names, otherwise it won't work. `{{placeholder}}`s
are also values that shouldn't be edited, they'll be replaced at runtime.

Keys that start with a double slash (for example, `// comment to translators`) are just comments
to provide more context or an explanation for a better understanding of the meaning of the translations.
They can be safely removed in the translations.

Once you're done translating, just send a pull request. If it's accepted, you'll see your
changes on the next reboot of the bot.

Obviously, don't forget to [join our Discord!](https://discord.gg/MDtgmEM)
