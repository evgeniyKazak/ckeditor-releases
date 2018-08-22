CKEDITOR.plugins.add('tabletemplate', {
    icons: "tabletemplate",
    init: function (editor) {

        editor.addCommand('insertTableTemplate', {
            exec: function (editor) {
                var now = new Date();
                editor.insertHtml('<table align="center" border="1" cellpadding="1" cellspacing="1" style="width:540px">\n' +
                    '    <thead>\n' +
                    '        <tr>\n' +
                    '            <th scope="col" style="width:35px">день</th>\n' +
                    '            <th scope="col" style="width:45px">время*</th>\n' +
                    '            <th scope="col" style="width:330px">мероприятие</th>\n' +
                    '            <th scope="col">примечание</th>\n' +
                    '        </tr>\n' +
                    '    </thead>\n' +
                    '    <tbody>\n' +
                    '        <tr>\n' +
                    '            <td style="width:12px">&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '        </tr>\n' +
                    '        <tr>\n' +
                    '            <td style="width:12px">&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '        </tr>\n' +
                    '        <tr>\n' +
                    '            <td style="width:12px">&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '        </tr>\n' +
                    '        <tr>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '        </tr>\n' +
                    '        <tr>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '        </tr>\n' +
                    '        <tr>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '        </tr>\n' +
                    '        <tr>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '        </tr>\n' +
                    '        <tr>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '        </tr>\n' +
                    '        <tr>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '        </tr>\n' +
                    '        <tr>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '        </tr>\n' +
                    '        <tr>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '        </tr>\n' +
                    '        <tr>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '        </tr>\n' +
                    '        <tr>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '        </tr>\n' +
                    '        <tr>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '        </tr>\n' +
                    '        <tr>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '        </tr>\n' +
                    '        <tr>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '        </tr>\n' +
                    '        <tr>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '        </tr>\n' +
                    '        <tr>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '        </tr>\n' +
                    '        <tr>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '            <td>&nbsp;</td>\n' +
                    '        </tr>\n' +
                    '    </tbody>\n' +
                    '</table>\n' +
                    '<p>&nbsp;</p>\n');
            }
        });

        editor.ui.addButton('tableTemplate', {
            label: 'Шаблон расписания',
            command: 'insertTableTemplate',
            toolbar: 'insert'
        });

    }
});