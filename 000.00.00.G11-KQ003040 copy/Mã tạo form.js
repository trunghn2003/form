
{
    schema: {
        type: 'object',
            required: false,
                properties: {
            diaDanh: {
                type: 'string',
                    maxLength: 50,
                        required: true,
        },
            diaDanhName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
            },
            noiNopHsCityCode: { type: 'string', maxLength: 50 },
            noiNopHsCityName: { type: 'string', maxLength: 255 },
            noiNopHsWardCode: { type: 'string', maxLength: 50 },
            noiNopHsWardName: { type: 'string', maxLength: 255 },
            banTuyenSinhCode: {
                type: 'string',
                    maxLength: 50,
                        required: true,
        },
            banTuyenSinhName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
        },
            ngayLap: {
                type: 'string',
                    maxLength: 50,
                        required: false,
        },
            xaName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
        },
            hoVaTen: {
                type: 'string',
                    maxLength: 255,
                        required: true,
        },
            gender: {
                type: 'string',
                    required: true,
        },
            birthDate: {
                type: 'string',
                    maxLength: 20,
                        required: true,
        },
            soCCCD: {
                type: 'string',
                    maxLength: 50,
                        required: true,
        },
            danTocCode: {
                type: 'string',
                    maxLength: 50,
                        required: true,
        },
            danTocName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
        },
            tonGiaoCode: {
                type: 'string',
                    maxLength: 50,
                        required: true,
        },
            tonGiaoName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
        },
            cityCode: {
                type: 'string',
                    maxLength: 50,
                        required: true,
        },
            cityName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
        },
            wardCode: {
                type: 'string',
                    maxLength: 50,
                        required: true,
        },
            wardName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
        },
            diaChiChiTiet: {
                type: 'string',
                    maxLength: 500,
                        required: false,
        },
            truongCode: {
                type: 'string',
                    maxLength: 50,
                        required: true,
        },
            truongName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
        },
            nganhHocCode: {
                type: 'string',
                    maxLength: 50,
                        required: true,
        },
            nganhHocName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
        },
            trinhDoDaoTaoCode: {
                type: 'string',
                    maxLength: 50,
                        required: true,
        },
            trinhDoDaoTaoName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
        },
            doiTuongUuTien: {
                type: 'string',
                    maxLength: 255,
                        required: true,
        },
            doiTuongUuTienName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
        },
            daTotNghiep: {
                type: 'string',
                    maxLength: 255,
                        required: true,
        },
            ngayThiTotNghiep: {
                type: 'string',
                    maxLength: 20,
                        required: true,
        },
            hocLucLop10: {
                type: 'string',
                    maxLength: 50,
                        required: false,
        },
            hanhKiemLop10: {
                type: 'string',
                    maxLength: 50,
                        required: false,
        },
            diemTongKetLop10: {
                type: 'string',
                    maxLength: 10,
                        required: false,
        },
            hocLucLop11: {
                type: 'string',
                    maxLength: 50,
                        required: false,
        },
            hanhKiemLop11: {
                type: 'string',
                    maxLength: 50,
                        required: false,
        },
            diemTongKetLop11: {
                type: 'string',
                    maxLength: 10,
                        required: false,
        },
            hocLucLop12: {
                type: 'string',
                    maxLength: 50,
                        required: true,
        },
            hanhKiemLop12: {
                type: 'string',
                    maxLength: 50,
                        required: true,
        },
            diemTongKetLop12: {
                type: 'string',
                    maxLength: 10,
                        required: true,
        },
            diemThiTHPT: {
                type: 'array',
                    required: true,
                        minItems: 4,
                            maxItems: 6,
                                items: {
                    type: 'object',
                        properties: {
                        tenMonCode: {
                            type: 'string',
                                maxLength: 50,
                                    required: false,
            },
                        tenMon: {
                            type: 'string',
                                maxLength: 100,
                                    required: false,
            },
                        diem: {
                            type: 'string',
                                maxLength: 10,
                                    required: true,
                                        title: "Điểm <sup style='color: red;'>(*)</sup>",
            },
                    },
                },
            },
            diemThiCaoDang: {
                type: 'array',
                    maxItems: 6,
                        items: {
                    type: 'object',
                        properties: {
                        tenMonCode: {
                            type: 'string',
                                maxLength: 50,
                                    required: false,
            },
                        tenMon: {
                            type: 'string',
                                maxLength: 100,
                                    required: false,
                                        title: "Tên môn",
            },
                        diem: {
                            type: 'string',
                                maxLength: 10,
                                    required: false,
                                        title: "Điểm",
            },
                    },
                },
                required: false,
        },
            doatGiai: {
                type: 'array',
                    items: {
                    type: 'object',
                        properties: {
                        tenGiai: {
                            type: 'string',
                                maxLength: 100,
                                    required: false,
                                        title: "Tên giải",
            },
                        monThi: {
                            type: 'string',
                                maxLength: 100,
                                    required: false,
                                        title: "Môn thi học sinh giỏi hoặc kỳ thi Olympic",
            },
                        nam: {
                            type: 'string',
                                maxLength: 100,
                                    required: false,
                                        title: "Năm",
            },
                    },
                },
                required: false,
        },
            nguoiLienHe: {
                type: 'string',
                    maxLength: 500,
                        required: false,
        },
        },
    },
    data: {
        ngayLap: new Date().toLocaleDateString('vi-VN'),
            diemThiTHPT: [
                { tenMonCode: '', tenMon: '', diem: '' },
                { tenMonCode: '', tenMon: '', diem: '' },
                { tenMonCode: '', tenMon: '', diem: '' },
                { tenMonCode: '', tenMon: '', diem: '' },
            ],
                diemThiCaoDang: [
                    { tenMonCode: '', tenMon: '', diem: '' },
                ],
                    doatGiai: [
                        { tenGiai: '', monThi: '', nam: '' },
                    ],
    },
    options: {
        type: 'object',
            fields: {
            diaDanh: {
                type: 'text',
                    label: '',
                        placeholder: 'Chọn địa danh',
                            title: '',
                                fieldClass: 'form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
        },
            diaDanhName: {
                type: 'hidden',
            },
            banTuyenSinhCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Chọn Ban tuyển sinh',
                            title: 'Ban tuyển sinh',
                                fieldClass: 'form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
        },
            banTuyenSinhName: {
                type: 'hidden',
        },
            ngayLap: {
                type: 'text',
                    label: '',
                        title: '',
                            fieldClass: 'form-input-100 header-field',
                                readonly: true,
                                    required: false,
        },
            xaName: {
                type: 'hidden',
        },
            hoVaTen: {
                type: 'text',
                    label: '',
                        placeholder: 'Nhập họ và tên',
                            title: 'Họ và tên người đăng ký học',
                                fieldClass: 'form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
        },
            gender: {
                type: 'radio',
                    label: '',
                        title: 'Nam/nữ',
                            fieldClass: 'form-input-100',
                                readonly: false,
                                    required: true,
        default: '',
                    removeDefaultNone: true,
                        vertical: false,
                            optionLabels: ['Nam', 'Nữ'],
                                dataSource: [
                                    { value: '0', text: 'Nam' },
                                    { value: '1', text: 'Nữ' }
                                ],
        },
            birthDate: {
                type: 'date',
                    label: '',
                        placeholder: 'DD/MM/YYYY',
                            title: 'Ngày, tháng, năm sinh',
                                dateFormat: 'DD/MM/YYYY',
                                    fieldClass: 'form-input-100',
                                        readonly: false,
                                            required: true,
        default: '',
                    picker: {
                    locale: 'vi_VN',
                        useCurrent: false,
                            defaultDate: new Date(),
                                dayViewHeaderFormat: 'MMMM YYYY',
                                    format: 'DD/MM/YYYY',
                                        extraFormats: [],
        },
            },
            soCCCD: {
                type: 'text',
                    label: '',
                        placeholder: 'Nhập số CCCD/CMND/Hộ chiếu',
                            title: 'CCCD/CMND/Hộ chiếu',
                                fieldClass: 'form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
        },
            danTocCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Chọn dân tộc',
                            title: 'Dân tộc',
                                fieldClass: 'form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
        },
            danTocName: {
                type: 'hidden',
        },
            tonGiaoCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Chọn tôn giáo',
                            title: 'Tôn giáo',
                                fieldClass: 'form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
        },
            tonGiaoName: {
                type: 'hidden',
        },
            cityCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Tỉnh/Thành phố',
                            title: 'Địa chỉ thường trú - Tỉnh/Thành phố',
                                fieldClass: 'form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
        },
            cityName: {
                type: 'hidden',
        },
            wardCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Xã/Phường',
                            title: 'Địa chỉ thường trú - Xã/Phường',
                                fieldClass: 'form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
        },
            wardName: {
                type: 'hidden',
        },
            diaChiChiTiet: {
                type: 'text',
                    label: '',
                        placeholder: 'Ghi rõ thôn, bản...',
                            title: 'Địa chỉ chi tiết',
                                fieldClass: 'form-input-100',
                                    readonly: false,
                                        required: false,
        default: '',
        },
            truongCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Chọn trường dự định xin học',
                            title: 'Trường đăng ký dự thi',
                                fieldClass: 'form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
        },
            truongName: {
                type: 'hidden',
        },
            nganhHocCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Chọn ngành dự định xin học',
                            title: 'Ngành dự định xin học',
                                fieldClass: 'form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
        },
            nganhHocName: {
                type: 'hidden',
        },
            trinhDoDaoTaoCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Chọn trình độ đào tạo',
                            title: 'Trình độ đào tạo',
                                fieldClass: 'form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
        },
            trinhDoDaoTaoName: {
                type: 'hidden',
        },
            doiTuongUuTien: {
                type: 'text',
                    label: '',
                        placeholder: 'Chọn đối tượng ưu tiên',
                            title: 'Thuộc đối tượng ưu tiên',
                                fieldClass: 'form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
        },
            doiTuongUuTienName: {
                type: 'hidden',
        },
            daTotNghiep: {
                type: 'text',
                    label: '',
                        placeholder: 'Nhập thông tin tốt nghiệp',
                            title: 'Đã tốt nghiệp',
                                fieldClass: 'form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
        },
            ngayThiTotNghiep: {
                type: 'date',
                    label: '',
                        placeholder: 'DD/MM/YYYY',
                            title: 'Ngày, tháng, năm dự thi tốt nghiệp',
                                dateFormat: 'DD/MM/YYYY',
                                    fieldClass: 'form-input-100',
                                        readonly: false,
                                            required: true,
        default: '',
                    picker: {
                    locale: 'vi_VN',
                        useCurrent: false,
                            defaultDate: new Date(),
                                dayViewHeaderFormat: 'MMMM YYYY',
                                    format: 'DD/MM/YYYY',
                                        extraFormats: [],
        },
            },
            hocLucLop10: {
                type: 'text',
                    label: '',
                        placeholder: 'Nhập học lực',
                            title: "Học lực",
                                fieldClass: 'form-input-100',
                                    readonly: false,
                                        required: false,
        default: '',
        },
            hanhKiemLop10: {
                type: 'text',
                    label: '',
                        placeholder: 'Nhập hạnh kiểm',
                            title: "Hạnh kiểm (rèn luyện)",
                                fieldClass: 'form-input-100',
                                    readonly: false,
                                        required: false,
        default: '',
        },
            diemTongKetLop10: {
                type: 'text',
                    label: '',
                        placeholder: 'Nhập điểm TK',
                            title: "Điểm tổng kết",
                                fieldClass: 'form-input-100',
                                    readonly: false,
                                        required: false,
        default: '',
        },
            hocLucLop11: {
                type: 'text',
                    label: '',
                        placeholder: 'Nhập học lực',
                            title: "Học lực",
                                fieldClass: 'form-input-100',
                                    readonly: false,
                                        required: false,
        default: '',
        },
            hanhKiemLop11: {
                type: 'text',
                    label: '',
                        placeholder: 'Nhập hạnh kiểm',
                            title: "Hạnh kiểm (rèn luyện)",
                                fieldClass: 'form-input-100',
                                    readonly: false,
                                        required: false,
        default: '',
        },
            diemTongKetLop11: {
                type: 'text',
                    label: '',
                        placeholder: 'Nhập điểm TK',
                            title: "Điểm tổng kết",
                                fieldClass: 'form-input-100',
                                    readonly: false,
                                        required: false,
        default: '',
        },
            hocLucLop12: {
                type: 'text',
                    label: '',
                        placeholder: 'Nhập học lực',
                            title: "Học lực <sup style='color: red;'>(*)</sup>",
                                fieldClass: 'form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
        },
            hanhKiemLop12: {
                type: 'text',
                    label: '',
                        placeholder: 'Nhập hạnh kiểm',
                            title: "Hạnh kiểm <sup style='color: red;'>(*)</sup>",
                                fieldClass: 'form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
        },
            diemTongKetLop12: {
                type: 'text',
                    label: '',
                        placeholder: 'Nhập điểm TK',
                            title: "Điểm tổng kết <sup style='color: red;'>(*)</sup>",
                                fieldClass: 'form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
        },
            diemThiTHPT: {
                type: 'table',
                    label: '',
                        title: 'Điểm thi các môn THPT',
                            fieldClass: 'form-input-100',
                                showActionsColumn: false,
                                    items: {
                    fields: {
                        tenMonCode: { type: 'hidden' },
                        tenMon: { title: 'Môn thi' },
                        diem: { title: 'Điểm' },
                    },
                },
                toolbar: {
                    actions: [],
        },
                actionbar: {
                    actions: [],
        },
            },
            diemThiCaoDang: {
                type: 'table',
                    label: '',
                        title: 'Điểm thi cao đẳng, đại học, trung cấp (nếu có)',
                            fieldClass: 'form-input-100',
                                showActionsColumn: true,
                                    items: {
                    fields: {
                        tenMonCode: { type: 'hidden' },
                        tenMon: { title: 'Tên môn' },
                        diem: { title: 'Điểm' },
                    },
                },
                toolbar: {
                    actions: [{
                        label: 'Thêm mới',
                        action: 'add',
                    }],
        },
                actionbar: {
                    actions: [{
                        label: 'Xóa',
                        action: 'remove',
                    }],
        },
            },
            doatGiai: {
                type: 'table',
                    label: '',
                        title: 'Đoạt giải (nếu có)',
                            fieldClass: 'form-input-100',
                                showActionsColumn: true,
                                    items: {
                    fields: {
                        tenGiai: { title: 'Tên giải' },
                        monThi: { title: 'Môn thi' },
                        nam: { title: 'Năm' },
                    },
                },
                toolbar: {
                    actions: [{
                        label: 'Thêm mới',
                        action: 'add',
                    }],
        },
                actionbar: {
                    actions: [{
                        label: 'Xóa',
                        action: 'remove',
                    }],
        },
            },
            nguoiLienHe: {
                type: 'textarea',
                    label: '',
                        placeholder: 'Khi cần báo tin cho ai, địa chỉ, điện thoại (nếu có)',
                            title: 'Thông tin liên hệ khẩn cấp',
                                fieldClass: 'form-input-100',
                                    readonly: false,
                                        required: false,
        default: '',
                    rows: 2,
        },
        },
        form: {
            buttons: { },
        },
    },
    postRender: function (control) {
        // Get saved form data for restoring dropdown values after AJAX loads
        var savedData = control.data || {};

        // Create header HTML - with proxy inputs inside containers + CSS reset
        var headerHtml = '\
        <style>\
            #diaDanh-container .input-label,\
            #banTuyenSinh-container .input-label {\
                text-align: left !important;\
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;\
                font-size: 14px !important;\
                font-weight: normal !important;\
                width: 100% !important;\
                display: block !important;\
                overflow: hidden !important;\
                appearance: none !important;\
                -webkit-appearance: none !important;\
                border: 1px solid #cdced9 !important;\
                border-radius: 4px !important;\
                min-height: 34px !important;\
                padding: 6px 30px 6px 10px !important;\
                box-shadow: rgba(0,0,0,0.1) 0px 1px 3px 0px, rgba(0,0,0,0.06) 0px 1px 2px 0px !important;\
                height: 34px !important;\
                box-sizing: border-box !important;\
                background: #fff !important;\
                color: #272833 !important;\
                line-height: 1.4 !important;\
            }\
        </style>\
        <div class="form-header-section" style="text-align: center; margin-bottom: 30px; font-family: Times New Roman, serif;">\
        <p style="font-size: 14pt; font-weight: bold; margin-bottom: 5px;">CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>\
        <p style="font-size: 13pt; font-weight: bold; margin-bottom: 5px;"><u>Độc lập - Tự do - Hạnh phúc</u></p>\
        <div style="text-align: center; margin: 20px 0;">\
            <span style="display: inline-block; width: 200px; vertical-align: middle; position: relative;" id="diaDanh-container"><input type="text" id="diaDanh-proxy" style="display:none;" /></span>\
            <span id="ngayLap-display" style="vertical-align: middle;"></span>\
        </div>\
        <h2 style="font-size: 16pt; font-weight: bold; text-transform: uppercase; margin: 20px 0;">ĐƠN ĐĂNG KÝ XÉT TUYỂN HỌC THEO CHẾ ĐỘ CỬ TUYỂN</h2>\
        <div style="text-align: center; font-size: 13pt; margin-bottom: 10px;">\
            <span style="vertical-align: middle;">Kính gửi Ban Tuyển sinh quân sự</span>\
            <span style="display: inline-block; width: 280px; vertical-align: middle; position: relative;" id="banTuyenSinh-container"><input type="text" id="banTuyenSinh-proxy" style="display:none;" /></span>\
        </div>\
        </div>\
    ';

        // Prepend header to the form
        $(control.getFieldEl()).prepend(headerHtml);

        // Hide original Alpaca fields (they stay in form for data saving)
        var diaDanhField = control.childrenByPropertyId['diaDanh'];
        if (diaDanhField) {
            $(diaDanhField.getFieldEl()).hide();
        }
        var banTuyenSinhField = control.childrenByPropertyId['banTuyenSinhCode'];
        if (banTuyenSinhField) {
            $(banTuyenSinhField.getFieldEl()).hide();
        }

        // Display today's date
        var ngayLapField = control.childrenByPropertyId['ngayLap'];
        if (ngayLapField) {
            $(ngayLapField.getFieldEl()).hide();
            var today = new Date();
            var day = today.getDate();
            var month = today.getMonth() + 1;
            var year = today.getFullYear();
            $('#ngayLap-display').text(', ngày ' + day + ' tháng ' + month + ' năm ' + year);
            ngayLapField.setValue(day + '/' + month + '/' + year);
        }

        // Restore xaName value for display and saving
        var xaNameField = control.childrenByPropertyId['xaName'];
        if (xaNameField) {
            var xaNameValue = savedData.xaName || '';
            if (xaNameValue) {
                xaNameField.setValue(xaNameValue);
                $('#xaName-display').text(xaNameValue);
            }
        }

        // Restore gender radio button
        var genderField = control.childrenByPropertyId['gender'];
        if (genderField && (savedData.gender !== undefined && savedData.gender !== null && savedData.gender !== '')) {
            var genderRadios = $(genderField.getFieldEl()).find('input[type="radio"]');
            genderRadios.each(function () {
                if ($(this).val() == savedData.gender) {
                    $(this).prop('checked', true);
                }
            });
        }

        // ===== AUTOCOMPLETE FUNCTION (upgraded from mauAChinhQuy - v2) =====
        function autocomplete(
            selectFetch,
            {
                api,
                keyStart,
                keyEnd,
                start = 0,
                number = 10,
                keySearch,
                fData = (d) => [d],
                keyLabel,
                keyValue,
                method = "get",
                headers,
                label = "",
                onchange = () => { },
                optionDefault = [],
                keyChange = "",
                valueChange = () => 1,
            }
        ) {
            let timer;
            function debounce(func, timeout = 300) {
                return (...args) => {
                    clearTimeout(timer);
                    timer = setTimeout(() => {
                        func.apply(this, args);
                    }, timeout);
                };
            }
            let arrayData = [];
            let parent = selectFetch.parentElement;
            let final = false;
            let typeping = false;
            let textSearch = "";
            let labelDefault = label;
            let currentFocus = -1;
            let noApi = optionDefault.length;
            let valueChangeOld = valueChange && valueChange();
            let currentLabel = label;
            let styleInnerHtml = `
           .input-label {
    overflow: hidden;
    display: block;
    width: 100%;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
            border: 1px solid #ccc !important;
            border-radius: 4px;
            font-size: 14pt;
            min-height: 40px !important;
            padding: 8px 30px 8px 12px;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
            height: 40px;
            font-family: Times New Roman, serif;
    }
            .select-hide {
              display: none;
            }
            .select-items {
              margin-right: 15px;
              position: absolute;
              background: #fff;
              height: 175px;
              overflow: auto;
              border: 1px solid #b5b5b5;
              z-index: 10000;
              border-radius: 4px;
              box-shadow: 0 2px 12px rgba(0,0,0,0.2);
            }
            /* Fix clipping in Alpaca table cells and all parent containers */
            .alpaca-field-table td, 
            .alpaca-field-table tr,
            .alpaca-field-table table,
            .alpaca-field-table,
            .alpaca-container-item,
            .alpaca-field,
            .alpaca-container,
            .alpaca-control,
            .f1-form-control,
            .f1-alpaca { 
                overflow: visible !important; 
            }
            /* Ensure the row and cell being interacted with is always on top */
            .alpaca-field-table tr:hover,
            .alpaca-field-table tr:focus-within {
                z-index: 10001 !important;
                position: relative;
                background: #fdfdfd;
            }
            .alpaca-field-table td:hover,
            .alpaca-field-table td:focus-within {
                z-index: 10002 !important;
                position: relative;
            }
            .select-items div {
              padding: 4px 10px;
              cursor: pointer;
              min-height: 30px;
              display: flex;
              align-items: center;
              font-size: 14pt;
              font-family: Times New Roman, serif;
              color: #272833;
            }
            .autocomplete-active,
            .same-as-selected {
              background: #1889eb;
              color: #fff;
            }
            .select-items div:hover {
              background: #1889eb;
              color: #fff;
            }
        `;
            selectFetch.style.display = "none";

            const Tout = setInterval(() => {
                let control2 = window.$('div[id="' + control.domEl.attr("id") + '"]')?.alpaca("get");
                !control2 && clearInterval(Tout);
                // Sync display from tracked label, not raw value
                if (!typeping && currentLabel && inp.value !== currentLabel) {
                    inp.value = currentLabel;
                }
            }, 100);

            // ── focusout: dùng setTimeout để mousedown/click item kịp xử lý trước khi đóng ──
            const inpfocusout = () => {
                setTimeout(() => {
                    typeping && (inp.value = currentLabel || labelDefault);
                    textSearch = "";
                    clearM();
                    items.classList.add("select-hide");
                }, 200);
            };

            const inpInput = debounce(function (e) {
                textSearch = inp.value;
                closeAllSelect();
                clearM();
                typeping = true;
                getData(true);
            });
            const clearM = () => {
                start = 0;
                final = false;
                arrayData = [];
                currentFocus = -1;
            };

            // ── Keyboard: mũi tên lên/xuống, Enter để chọn ──
            const inpKeyDown = (e) => {
                let x = items.getElementsByTagName("div") || [];

                // Enter: chọn option đang highlight (hoặc option đầu tiên nếu chưa highlight)
                if (e.keyCode === 13) {
                    e.preventDefault();
                    if (!items.classList.contains("select-hide") && arrayData.length) {
                        if (currentFocus < 0) currentFocus = 0;
                        if (currentFocus >= arrayData.length) currentFocus = arrayData.length - 1;
                        var opt = arrayData[currentFocus];
                        if (opt) {
                            var optLabel = opt[keyLabel] || "";
                            var value = opt[keyValue] || optLabel;
                            selectItem(optLabel, value, opt);
                        }
                    }
                    return;
                }

                if (!x.length) return;
                const scrollTop = items.scrollTop;

                // Điều hướng bằng mũi tên
                if (e.keyCode == 40) {
                    e.preventDefault();
                    currentFocus++;
                    addActive();
                } else if (e.keyCode == 38) {
                    e.preventDefault();
                    currentFocus--;
                    addActive();
                }

                if (currentFocus > -1 && x.length) {
                    const divTop = x[currentFocus].offsetTop;
                    const divPosition = divTop - scrollTop;
                    if (divPosition < 0 || divPosition + x[currentFocus].clientHeight > items.offsetHeight - 27) {
                        items.scroll({ top: divTop, behavior: "smooth" });
                    }
                }
            };

            let inp = document.createElement("input");
            inp.value = currentLabel || labelDefault || "";
            inp.classList.add("input-label");
            inp.onfocusout = inpfocusout;
            inp.addEventListener("input", inpInput);
            inp.onfocus = getData;
            inp.type = "text";

            let style = document.createElement("style");
            style.innerHTML = styleInnerHtml;
            parent.appendChild(style);

            let items = document.createElement("DIV");
            inp.addEventListener("keydown", inpKeyDown);

            function addActive(x) {
                x = items.getElementsByTagName("div");
                if (!x.length) return false;
                removeActive();
                if (currentFocus >= x.length) currentFocus = 0;
                if (currentFocus < 0) currentFocus = x.length - 1;
                x[currentFocus].classList.add("autocomplete-active");
            }
            function removeActive(x) {
                x = items.getElementsByTagName("div");
                for (var i = 0; i < x.length; i++) {
                    x[i].classList.remove("autocomplete-active");
                }
            }

            // ── clearX: xóa giá trị và thông báo onchange với cleared: true ──
            const clearX = () => {
                inp.value = "";
                clearM();
                textSearch = "";
                selectFetch.value = "";
                labelDefault = label;
                currentLabel = "";
                textSearch = "";
                valueChangeOld = valueChange && valueChange();
                selectFetch.dispatchEvent(new Event("change"));
                // Thông báo cho onchange biết là đã xóa lựa chọn
                if (typeof onchange === "function") {
                    onchange({
                        label: "",
                        value: "",
                        item: null,
                        cleared: true,
                    });
                }
                return true;
            };

            inp.addEventListener("click", function (e) {
                e.stopPropagation();
                closeAllSelect(this);
                items.classList.remove("select-hide");
                valueChange && valueChangeOld != valueChange() && clearX() && getData();
            });

            // ── Layout: bọc input + icon mũi tên + nút X ──
            parent.style.position = parent.style.position || "relative";
            parent.appendChild(inp);

            // Icon mũi tên (decorative, pointer-events: none)
            let arrowSpan = document.createElement("span");
            arrowSpan.innerHTML = "▼";
            arrowSpan.style.position = "absolute";
            arrowSpan.style.right = "22px";
            arrowSpan.style.top = "50%";
            arrowSpan.style.transform = "translateY(-50%)";
            arrowSpan.style.pointerEvents = "none";
            arrowSpan.style.color = "#999";
            arrowSpan.style.fontSize = "10px";
            parent.appendChild(arrowSpan);

            // Nút X để xóa giá trị đã chọn
            let clearBtn = document.createElement("span");
            clearBtn.innerHTML = "×";
            clearBtn.style.position = "absolute";
            clearBtn.style.right = "8px";
            clearBtn.style.top = "50%";
            clearBtn.style.transform = "translateY(-50%)";
            clearBtn.style.cursor = "pointer";
            clearBtn.style.color = "#999";
            clearBtn.style.fontSize = "16px";
            clearBtn.style.userSelect = "none";
            clearBtn.title = "Xóa giá trị đã chọn";
            clearBtn.onclick = function (e) {
                e.stopPropagation();
                clearX();
            };
            parent.appendChild(clearBtn);

            items.setAttribute("class", "select-items select-hide");
            items.onscroll = function (e) {
                this.scrollTop + this.offsetHeight > this.scrollHeight - 20 && arrayData.length && debounce(() => getData(true, true))();
            };
            parent.appendChild(items);

            // ── selectItem: hàm dùng chung cho cả click (onmousedown) và Enter ──
            const selectItem = (optLabel, value, option) => {
                typeping = false;
                inp.value = optLabel;
                currentLabel = optLabel;
                items.querySelectorAll("div").forEach((d) => d.removeAttribute("class"));
                labelDefault = optLabel;
                selectFetch.value = value;
                selectFetch.dispatchEvent(new Event("change"));
                onchange({
                    label: optLabel,
                    value: value,
                    item: option,
                });
                start = 0;
                currentFocus = -1;
                textSearch = "";
                final = false;
                items.classList.add("select-hide");
            };

            async function getData(search, add) {
                items.style.width = `${inp.offsetWidth}px`;
                items.classList.remove("select-hide");
                if (final) return;
                if (noApi) {
                    arrayData = optionDefault.filter((option) => !textSearch || (option[keyLabel] && textSearch && option[keyLabel].trim().toLocaleLowerCase().indexOf(textSearch.toLocaleLowerCase()) > -1));
                } else if (search || !arrayData.length) {
                    let urlBase = api.startsWith('http') ? new URL(api) : new URL(document.location.origin + api);
                    keyStart && urlBase.searchParams.append(keyStart, start);
                    keyEnd && urlBase.searchParams.append(keyEnd, api.startsWith('http') ? number : start + number);
                    typeping && keySearch && urlBase.searchParams.append(keySearch, textSearch);

                    keyChange && valueChange() && urlBase.searchParams.append(keyChange, valueChange());

                    let url = urlBase.toString();
                    !add && (items.innerHTML = "Đang tìm kiếm ...");
                    let oLaster;
                    if (add) {
                        oLaster = document.createElement("DIV");
                        oLaster.innerHTML = "Đang tìm kiếm ...";
                        items.appendChild(oLaster);
                    }
                    try {
                        let p = await Fetch({
                            url,
                            method,
                            headers,
                        });
                        arrayData = fData(p);
                        start += number;
                        final = (p.total && p.total < 20) || (arrayData && arrayData.length < 20);
                        oLaster && oLaster.remove();
                    } catch (e) {
                        console.error(e);
                        arrayData = [];
                    }
                }
                !add && (items.innerHTML = !arrayData.length ? "Không có dữ liệu phù hợp" : "");
                for (let j = 0; j < arrayData.length; j++) {
                    let option = arrayData[j];
                    let c = document.createElement("DIV");
                    let optLabel = option[keyLabel] || "";
                    let value = option[keyValue] || optLabel;
                    c.innerHTML = `<span>${optLabel}<span>`;
                    selectFetch.value && value == selectFetch.value && c.setAttribute("class", "same-as-selected");
                    // ── onmousedown thay vì onclick: tránh conflict với inpfocusout ──
                    c.onmousedown = function (e) {
                        e.preventDefault();
                        selectItem(optLabel, value, option);
                    };
                    items.appendChild(c);
                }
                return;
            }

            if (!window._autoCompleteDocClickRegistered) {
                window._autoCompleteDocClickRegistered = true;
                document.addEventListener("click", function (e) {
                    var allItems = document.getElementsByClassName("select-items");
                    for (var k = 0; k < allItems.length; k++) {
                        allItems[k].classList.add("select-hide");
                    }
                });
            }
            !window.dLocal && (window.dLocal = []);
            function closeAllSelect() {
                var allItems = document.getElementsByClassName("select-items");
                for (var i = 0; i < allItems.length; i++) {
                    allItems[i].classList.add("select-hide");
                }
            }
            function r(t, e, n) {
                var r = (t) => t >= 200 && t < 300;
                return n.status && r && !r(n.status) ? e(false) : t(n.data);
            }
            function forEach(t, e) {
                if (null !== t && "undefined" !== typeof t)
                    if (("object" !== typeof t && (t = [t]), "[object Array]" === Object.prototype.toString.call(t))) for (var n = 0, i = t.length; n < i; n++) e.call(null, t[n], n, t);
                    else for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.call(null, t[r], r, t);
            }
            function Fetch(t) {
                return new Promise(function (e, u) {
                    var l = t.data,
                        f = t.headers || [],
                        i;
                    var h = new XMLHttpRequest();
                    h.open(t.method.toUpperCase(), t.url, !0),
                        (h.timeout = t.timeout),
                        (h.onreadystatechange = function () {
                            if (h && 4 === h.readyState && (0 !== h.status || (h.responseURL && 0 === h.responseURL.indexOf("file:")))) {
                                var n = null,
                                    i = t.responseType && "text" !== t.responseType ? h.response : h.responseText;
                                try {
                                    i = JSON.parse(i);
                                } catch (e) { }
                                var o = {
                                    data: i,
                                    status: h.status,
                                    statusText: h.statusText,
                                    headers: n,
                                    config: t,
                                    request: h,
                                };
                                r(e, u, o), (h = null);
                            }
                        }),
                        (h.onerror = function () {
                            u(false), (h = null);
                        }),
                        (h.ontimeout = function () {
                            u(false), (h = null);
                        });
                    "setRequestHeader" in h &&
                        forEach(f, function (t, e) {
                            "undefined" === typeof l && "content-type" === e.toLowerCase() ? delete f[e] : h.setRequestHeader(e, t);
                        }),
                        t.withCredentials && (h.withCredentials = !0);

                    "function" === typeof t.onDownloadProgress && h.addEventListener("progress", t.onDownloadProgress),
                        "function" === typeof t.onUploadProgress && h.upload && h.upload.addEventListener("progress", t.onUploadProgress),
                        h.send(l);
                });
            }
            return {
                clear: clearX,
                refresh: () => {
                    start = 0;
                    final = false;
                    currentFocus = -1;
                    textSearch = "";
                    labelDefault = label;
                    currentLabel = "";
                    arrayData = [];
                    inp.value = labelDefault;
                },
                disable: () => {
                    inp.disabled = true;
                    inp.style.opacity = '0.5';
                    inp.style.cursor = 'not-allowed';
                    inp.style.backgroundColor = '#f0f0f0';
                },
                enable: () => {
                    inp.disabled = false;
                    inp.style.opacity = '1';
                    inp.style.cursor = '';
                    inp.style.backgroundColor = '#fff';
                },
            };
        }
        // ===== END AUTOCOMPLETE FUNCTION =====

        var wardAutoRef = null;
        var nganhHocAutoRef = null;
        var selectedTruongCode = savedData.truongCode || '';
        var selectedCityCode = savedData.cityCode || '';

        // Dùng chung hệ API TSQS nội bộ
        var TSQS_BASE = '/o/secure/rest/v2/tsqs';

        // ===== EXTERNAL API FIELDS =====
        [
            {
                id: 'diaDanh',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: TSQS_BASE + '/address?type=0',
                label: savedData.diaDanhName || '',
                onchange: function (obj) {
                    if (control.childrenByPropertyId['diaDanhName']) {
                        control.childrenByPropertyId['diaDanhName'].setValue(obj.label);
                    }
                },
            },
            {
                id: 'banTuyenSinhCode',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: TSQS_BASE + '/armyorg?type=0',
                label: savedData.banTuyenSinhName || '',
                onchange: function (obj) {
                    if (control.childrenByPropertyId['banTuyenSinhName']) {
                        control.childrenByPropertyId['banTuyenSinhName'].setValue(obj.label);
                    }
                },
            },
            {
                id: 'cityCode',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: TSQS_BASE + '/address?type=0',
                label: savedData.cityName || '',
                onchange: function (obj) {
                    selectedCityCode = obj.value || '';
                    if (control.childrenByPropertyId['cityName']) {
                        control.childrenByPropertyId['cityName'].setValue(obj.label);
                    }
                    if (wardAutoRef) {
                        wardAutoRef.clear();
                        if (obj.value) {
                            wardAutoRef.enable();
                        } else {
                            wardAutoRef.disable();
                        }
                    }
                    if (control.childrenByPropertyId['wardName']) {
                        control.childrenByPropertyId['wardName'].setValue('');
                    }
                },
            },
            {
                id: 'wardCode',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: TSQS_BASE + '/address?type=1',
                label: savedData.wardName || '',
                keyChange: 'parentCode',
                valueChange: function () {
                    return selectedCityCode;
                },
                onchange: function (obj) {
                    if (control.childrenByPropertyId['wardName']) {
                        control.childrenByPropertyId['wardName'].setValue(obj.label);
                    }
                    if (control.childrenByPropertyId['xaName']) {
                        control.childrenByPropertyId['xaName'].setValue(obj.label);
                    }
                    $('#xaName-display').text(obj.label || '');
                },
            },
            {
                id: 'truongCode',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: '/o/rest/v2/dictcollections/UNIVERSITY/dictitems',
                label: savedData.truongName || '',
                onchange: function (obj) {
                    selectedTruongCode = obj.value || '';
                    if (control.childrenByPropertyId['truongName']) {
                        control.childrenByPropertyId['truongName'].setValue(obj.label);
                    }
                    if (nganhHocAutoRef) {
                        nganhHocAutoRef.clear();
                        if (obj.value) {
                            nganhHocAutoRef.enable();
                        } else {
                            nganhHocAutoRef.disable();
                        }
                    }
                    if (control.childrenByPropertyId['nganhHocName']) {
                        control.childrenByPropertyId['nganhHocName'].setValue('');
                    }
                },
            },
            {
                id: 'nganhHocCode',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: TSQS_BASE + '/universityfield',
                label: savedData.nganhHocName || '',
                keyChange: 'universityCode',
                valueChange: function () {
                    return selectedTruongCode;
                },
                onchange: function (obj) {
                    if (control.childrenByPropertyId['nganhHocName']) {
                        control.childrenByPropertyId['nganhHocName'].setValue(obj.label);
                    }
                },
            },
        ].forEach(function ({ id, keyLabel, keyValue, api, onchange, keyChange, valueChange, label: fieldLabel, fData: customFData }) {
            var field = control.childrenByPropertyId[id];
            if (!field) return;

            // For header proxy fields, use the proxy input instead of the Alpaca input
            var inputEl;
            var proxyMap = { 'diaDanh': '#diaDanh-proxy', 'banTuyenSinhCode': '#banTuyenSinh-proxy' };
            if (proxyMap[id]) {
                inputEl = $(proxyMap[id])[0];
            } else {
                inputEl = $(field.getFieldEl()).find('input[type="text"]')[0];
            }
            if (!inputEl) return;

            // Wrap onchange to also sync value to hidden Alpaca field for proxy inputs
            var originalOnchange = onchange;
            var wrappedOnchange = function(obj) {
                if (proxyMap[id] && field) {
                    field.setValue(obj.value || '');
                }
                originalOnchange(obj);
            };

            var f = autocomplete(inputEl, {
                api: api || '',
                fData: customFData || function (p) { return (p && p.data) || []; },
                headers: {
                    Token: window.Liferay?.authToken || '',
                    groupId: (window.themeDisplay?.getScopeGroupId && window.themeDisplay.getScopeGroupId()) || 0,
                    Accept: 'application/json, text/plain, */*',
                },
                keyStart: 'start',
                keyEnd: 'end',
                start: 0,
                number: 20,
                keyLabel: keyLabel,
                keyValue: keyValue,
                keySearch: 'keyword',
                optionDefault: [],
                onchange: wrappedOnchange,
                label: fieldLabel || '',
                keyChange: keyChange || '',
                valueChange: valueChange || function () { return 1; },
            });

            if (id === 'wardCode') wardAutoRef = f;
            if (id === 'nganhHocCode') nganhHocAutoRef = f;

            if (!window.dLocal) window.dLocal = [];
            if (!window.dLocal.some(function (a) { return a.id === id; })) {
                window.dLocal.push({ id: id, f: f });
            }
        });

        // ===== INTERNAL API FIELDS (dictcollections + optionDefault) =====
        [
            {
                id: 'danTocCode',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: '/o/secure/rest/v2/tsqs/dictitem?collectionCode=ETHNIC_LIST&start=0&end=200',
                label: savedData.danTocName || '',
                onchange: function (obj) {
                    if (control.childrenByPropertyId['danTocName']) {
                        control.childrenByPropertyId['danTocName'].setValue(obj.label);
                    }
                },
                // Ưu tiên hiển thị dân tộc "Kinh" lên đầu danh sách
                fData: function (p) {
                    var list = (p && p.data) || [];
                    return list.sort(function (a, b) {
                        var ak = a.itemName === 'Kinh' ? 0 : 1;
                        var bk = b.itemName === 'Kinh' ? 0 : 1;
                        if (ak !== bk) return ak - bk;
                        return (a.itemName || '').localeCompare(b.itemName || '');
                    });
                },
            },
            {
                id: 'tonGiaoCode',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: '/o/secure/rest/v2/tsqs/dictitem?collectionCode=RELIGION_LIST&start=0&end=200',
                label: savedData.tonGiaoName || '',
                onchange: function (obj) {
                    if (control.childrenByPropertyId['tonGiaoName']) {
                        control.childrenByPropertyId['tonGiaoName'].setValue(obj.label);
                    }
                },
                // Ưu tiên hiển thị "Không" (không tôn giáo) lên đầu danh sách
                fData: function (p) {
                    var list = (p && p.data) || [];
                    return list.sort(function (a, b) {
                        var aIsNone = a.itemName === 'Không' ? 0 : 1;
                        var bIsNone = b.itemName === 'Không' ? 0 : 1;
                        if (aIsNone !== bIsNone) return aIsNone - bIsNone;
                        return (a.itemName || '').localeCompare(b.itemName || '');
                    });
                },
            },
            {
                id: 'trinhDoDaoTaoCode',
                keyLabel: 'text',
                keyValue: 'value',
                label: savedData.trinhDoDaoTaoName || '',
                optionDefault: [
                    { value: 'DH', text: 'Đại học' },
                    { value: 'CD', text: 'Cao đẳng' },
                    { value: 'TC', text: 'Trung cấp' }
                ],
                onchange: function (obj) {
                    if (control.childrenByPropertyId['trinhDoDaoTaoName']) {
                        control.childrenByPropertyId['trinhDoDaoTaoName'].setValue(obj.label);
                    }
                },
            },
            {
                id: 'doiTuongUuTien',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: '/o/secure/rest/v2/tsqs/dictitem?collectionCode=StatusMark',
                label: savedData.doiTuongUuTienName || '',
                onchange: function (obj) {
                    if (control.childrenByPropertyId['doiTuongUuTienName']) {
                        control.childrenByPropertyId['doiTuongUuTienName'].setValue(obj.label);
                    }
                },
            },
        ].forEach(function ({ id, keyLabel, keyValue, api, onchange, fData, optionDefault, keyChange, valueChange, label: fieldLabel }) {
            var field = control.childrenByPropertyId[id];
            if (!field) return;
            var inputEl = $(field.getFieldEl()).find('input[type="text"]')[0];
            if (!inputEl) return;

            var f = autocomplete(inputEl, {
                api: api || '',
                fData: fData || function (p) { return p.data || []; },
                headers: {
                    Token: window.Liferay?.authToken || '',
                    groupId: (window.themeDisplay?.getScopeGroupId && window.themeDisplay.getScopeGroupId()) || 0,
                    Accept: 'application/json, text/plain, */*',
                },
                keyStart: 'start',
                keyEnd: 'end',
                start: 0,
                number: 20,
                keyLabel: keyLabel,
                keyValue: keyValue,
                keySearch: 'keyword',
                optionDefault: optionDefault || [],
                onchange: onchange,
                label: fieldLabel || '',
                keyChange: keyChange || '',
                valueChange: valueChange || function () { return 1; },
            });

            if (!window.dLocal) window.dLocal = [];
            if (!window.dLocal.some(function (a) { return a.id === id; })) {
                window.dLocal.push({ id: id, f: f });
            }
        });

        // ===== HANDLE PRE-FILLED NAME DATA (resolve name → code via API) =====
        var apiHeaders = {
            Token: window.Liferay?.authToken || '',
            groupId: (window.themeDisplay?.getScopeGroupId && window.themeDisplay.getScopeGroupId()) || 0,
            Accept: 'application/json, text/plain, */*',
        };

        // Helper: fetch items from external/internal API and find by name
        function fetchAndFindByName(apiUrl, name, callback) {
            if (!name) return;
            var isExternal = apiUrl.indexOf('http') === 0;
            var url = isExternal ? new URL(apiUrl) : new URL(document.location.origin + apiUrl);
            if (isExternal) {
                url.searchParams.append('name', name);
                url.searchParams.append('page', 1);
                url.searchParams.append('pageSize', 50);
            } else {
                url.searchParams.append('keyword', name);
                url.searchParams.append('start', 0);
                url.searchParams.append('end', 50);
            }
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url.toString(), true);
            if (!isExternal) {
                Object.keys(apiHeaders).forEach(function (key) {
                    xhr.setRequestHeader(key, apiHeaders[key]);
                });
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
                    try {
                        var response = JSON.parse(xhr.responseText);
                        var items = isExternal ? (response.items || []) : (response.data || []);
                        var nameKey = isExternal ? 'name' : 'itemName';
                        var found = null;
                        for (var i = 0; i < items.length; i++) {
                            if (items[i][nameKey] && items[i][nameKey].trim().toLowerCase() === name.trim().toLowerCase()) {
                                found = items[i];
                                break;
                            }
                        }
                        callback(found, items);
                    } catch (e) {
                        console.error('Error parsing API response:', e);
                        callback(null, []);
                    }
                }
            };
            xhr.send();
        }

        // Helper: set autocomplete value programmatically
        function setAutocompleteValue(fieldId, code, name) {
            var field = control.childrenByPropertyId[fieldId];
            if (field) {
                field.setValue(code);
            }
            if (window.dLocal) {
                for (var i = 0; i < window.dLocal.length; i++) {
                    if (window.dLocal[i].id === fieldId) {
                        var autoRef = window.dLocal[i].f;
                        if (autoRef && autoRef.refresh) {
                            autoRef.refresh();
                        }
                        var fieldEl = field ? $(field.getFieldEl()) : null;
                        if (fieldEl) {
                            var inputLabel = fieldEl.find('.input-label');
                            if (inputLabel.length) {
                                inputLabel.val(name);
                            }
                        }
                        break;
                    }
                }
            }
        }

        // Resolve diaDanh: if has name but no code
        if (savedData.diaDanhName && !savedData.diaDanh) {
            fetchAndFindByName(
                TSQS_BASE + '/Address/province',
                savedData.diaDanhName,
                function (found) {
                    if (found) {
                        setAutocompleteValue('diaDanh', found.codeView, found.name);
                        if (control.childrenByPropertyId['diaDanhName']) {
                            control.childrenByPropertyId['diaDanhName'].setValue(found.name);
                        }
                    }
                }
            );
        }

        // Resolve cityCode and wardCode: city first, then ward
        var needResolveCityByName = savedData.cityName && !savedData.cityCode;
        var needResolveWardByName = savedData.wardName && !savedData.wardCode;

        if (needResolveCityByName) {
            fetchAndFindByName(
                TSQS_BASE + '/Address/province',
                savedData.cityName,
                function (found) {
                    if (found) {
                        setAutocompleteValue('cityCode', found.codeView, found.name);
                        if (control.childrenByPropertyId['cityName']) {
                            control.childrenByPropertyId['cityName'].setValue(found.name);
                        }
                        if (wardAutoRef) wardAutoRef.enable();
                        if (needResolveWardByName) {
                            fetchAndFindByName(
                                TSQS_BASE + '/Address/ward?provinceCode=' + found.codeView,
                                savedData.wardName,
                                function (wardFound) {
                                    if (wardFound) {
                                        setAutocompleteValue('wardCode', wardFound.codeView, wardFound.name);
                                        if (control.childrenByPropertyId['wardName']) {
                                            control.childrenByPropertyId['wardName'].setValue(wardFound.name);
                                        }
                                        if (control.childrenByPropertyId['xaName']) {
                                            control.childrenByPropertyId['xaName'].setValue(wardFound.name);
                                        }
                                        $('#xaName-display').text(wardFound.name);
                                    }
                                }
                            );
                        }
                    }
                }
            );
        } else if (needResolveWardByName && savedData.cityCode) {
            fetchAndFindByName(
                TSQS_BASE + '/Address/ward?provinceCode=' + savedData.cityCode,
                savedData.wardName,
                function (wardFound) {
                    if (wardFound) {
                        setAutocompleteValue('wardCode', wardFound.codeView, wardFound.name);
                        if (control.childrenByPropertyId['wardName']) {
                            control.childrenByPropertyId['wardName'].setValue(wardFound.name);
                        }
                        if (control.childrenByPropertyId['xaName']) {
                            control.childrenByPropertyId['xaName'].setValue(wardFound.name);
                        }
                        $('#xaName-display').text(wardFound.name);
                    }
                }
            );
        }

        // ===== DISABLE WARD IF CITY NOT SELECTED =====
        if (wardAutoRef) {
            var cityField = control.childrenByPropertyId['cityCode'];
            var cityValue = cityField ? cityField.getValue() : '';
            if (!cityValue && !needResolveCityByName) {
                wardAutoRef.disable();
            }
        }

        // ===== DISABLE NGANH HOC IF TRUONG NOT SELECTED =====
        if (nganhHocAutoRef && !selectedTruongCode) {
            nganhHocAutoRef.disable();
        }

        // diemThiTHPT: inject môn thi using Subject dictitems
        var diemThiTHPTField = control.childrenByPropertyId['diemThiTHPT'];

        // Inject autocomplete into tenMon cells of diemThiTHPT table
        var injectMonSelects = function () {
            if (!diemThiTHPTField || !diemThiTHPTField.children) return;
            diemThiTHPTField.children.forEach(function (child) {
                var tenMonField = child.childrenByPropertyId && child.childrenByPropertyId['tenMon'];
                var tenMonCodeField = child.childrenByPropertyId && child.childrenByPropertyId['tenMonCode'];
                if (!tenMonField) return;

                var $cell = $(tenMonField.getFieldEl());
                var tenMonInput = $cell.find('input[type="text"]')[0];
                if (!tenMonInput) return;

                // Avoid duplicate widgets when table rows are rebuilt
                if ($cell.find('input.input-label').length > 0 || tenMonInput.style.display === 'none') return;

                $cell.find('.mon-thi-select').remove();

                autocomplete(tenMonInput, {
                    api: '/o/secure/rest/v2/tsqs/dictitem?collectionCode=Education_Subject',
                    keyStart: 'start',
                    keyEnd: 'end',
                    start: 0,
                    number: 20,
                    keySearch: 'keyword',
                    keyLabel: 'itemName',
                    keyValue: 'itemCode',
                    headers: {
                        Token: window.Liferay?.authToken || '',
                        groupId: (window.themeDisplay?.getScopeGroupId && window.themeDisplay.getScopeGroupId()) || 0,
                        Accept: 'application/json, text/plain, */*',
                    },
                    label: tenMonField.getValue ? tenMonField.getValue() : '',
                    fData: function (p) {
                        var raw = p && p.data;
                        if (Array.isArray(raw)) return raw;
                        if (raw && Array.isArray(raw.data)) return raw.data;
                        if (raw && Array.isArray(raw.items)) return raw.items;
                        if (raw && Array.isArray(raw.result)) return raw.result;
                        if (raw && Array.isArray(raw.content)) return raw.content;
                        return [];
                    },
                    onchange: function (obj) {
                        var label = (obj && obj.label) ? obj.label : '';
                        var value = (obj && obj.value) ? obj.value : '';
                        if (tenMonField) tenMonField.setValue(label);
                        if (tenMonCodeField) tenMonCodeField.setValue(value);
                    }
                });
            });
        };

        if (diemThiTHPTField) {
            setTimeout(injectMonSelects, 300);

            // Hide add/toolbar buttons for diemThiTHPT
            setTimeout(function () {
                $(diemThiTHPTField.getFieldEl()).find('.alpaca-array-toolbar').hide();
            }, 300);

            // Re-inject when rows change
            var thptTbody = $(diemThiTHPTField.getFieldEl()).find('table tbody')[0];
            if (thptTbody) {
                var thptObserver = new MutationObserver(function (mutations) {
                    mutations.forEach(function (m) {
                        if (m.addedNodes.length > 0) {
                            setTimeout(injectMonSelects, 200);
                        }
                    });
                });
                thptObserver.observe(thptTbody, { childList: true });
            }

            // Function to get required number of subjects based on graduation year
            var getRequiredSubjects = function (year) {
                if (!year || isNaN(year)) return 4;
                year = parseInt(year);
                if (year <= 2024) return 4;
                if (year === 2025) return 5;
                if (year == 2026) return 4;
                return 4;
            };

            // Function to update diemThiTHPT rows based on graduation year
            var updateDiemThiTHPTRows = function (year) {
                var requiredCount = getRequiredSubjects(year);
                var currentCount = diemThiTHPTField.children ? diemThiTHPTField.children.length : 0;

                if (currentCount === requiredCount) {
                    return;
                }

                var newData = [];
                for (var i = 0; i < requiredCount; i++) {
                    if (i < currentCount && diemThiTHPTField.children[i]) {
                        var existingChild = diemThiTHPTField.children[i];
                        var existingCode = existingChild.childrenByPropertyId && existingChild.childrenByPropertyId['tenMonCode'] ? existingChild.childrenByPropertyId['tenMonCode'].getValue() : '';
                        var existingName = existingChild.childrenByPropertyId && existingChild.childrenByPropertyId['tenMon'] ? existingChild.childrenByPropertyId['tenMon'].getValue() : '';
                        var existingDiem = existingChild.childrenByPropertyId && existingChild.childrenByPropertyId['diem'] ? existingChild.childrenByPropertyId['diem'].getValue() : '';
                        newData.push({ tenMonCode: existingCode, tenMon: existingName, diem: existingDiem });
                    } else {
                        newData.push({ tenMonCode: '', tenMon: '', diem: '' });
                    }
                }

                diemThiTHPTField.setValue(newData);
                setTimeout(injectMonSelects, 400);
            };

            // Listen for changes on ngayThiTotNghiep to update number of subjects
            var ngayThiTotNghiepField = control.childrenByPropertyId['ngayThiTotNghiep'];
            if (ngayThiTotNghiepField) {
                $(ngayThiTotNghiepField.getFieldEl()).find('input').on('change dp.change', function () {
                    var dateValue = $(this).val();
                    if (dateValue) {
                        var parts = dateValue.split('/');
                        if (parts.length === 3) {
                            updateDiemThiTHPTRows(parseInt(parts[2]));
                        }
                    }
                });

                var initialDateValue = ngayThiTotNghiepField.getValue();
                if (initialDateValue) {
                    var parts = initialDateValue.split('/');
                    if (parts.length === 3) {
                        updateDiemThiTHPTRows(parseInt(parts[2]));
                    }
                }
            }
        }

        // diemThiCaoDang: inject môn thi using Subject dictitems
        var diemThiCaoDangField = control.childrenByPropertyId['diemThiCaoDang'];
        if (diemThiCaoDangField) {
            var injectCaoDangSelects = function () {
                if (!diemThiCaoDangField.children) return;
                diemThiCaoDangField.children.forEach(function (child) {
                    var tenMonField = child.childrenByPropertyId && child.childrenByPropertyId['tenMon'];
                    var tenMonCodeField = child.childrenByPropertyId && child.childrenByPropertyId['tenMonCode'];
                    if (!tenMonField) return;

                    var $cell = $(tenMonField.getFieldEl());
                    var tenMonInput = $cell.find('input[type="text"]')[0];
                    if (!tenMonInput) return;

                    if ($cell.find('input.input-label').length > 0 || tenMonInput.style.display === 'none') return;

                    $cell.find('.mon-thi-select-cd').remove();

                    autocomplete(tenMonInput, {
                        api: '/o/secure/rest/v2/tsqs/dictitem?collectionCode=Education_Subject',
                        keyStart: 'start',
                        keyEnd: 'end',
                        start: 0,
                        number: 20,
                        keySearch: 'keyword',
                        keyLabel: 'itemName',
                        keyValue: 'itemCode',
                        headers: {
                            Token: window.Liferay?.authToken || '',
                            groupId: (window.themeDisplay?.getScopeGroupId && window.themeDisplay.getScopeGroupId()) || 0,
                            Accept: 'application/json, text/plain, */*',
                        },
                        label: tenMonField.getValue ? tenMonField.getValue() : '',
                        fData: function (p) {
                            var raw = p && p.data;
                            if (Array.isArray(raw)) return raw;
                            if (raw && Array.isArray(raw.data)) return raw.data;
                            if (raw && Array.isArray(raw.items)) return raw.items;
                            if (raw && Array.isArray(raw.result)) return raw.result;
                            if (raw && Array.isArray(raw.content)) return raw.content;
                            return [];
                        },
                        onchange: function (obj) {
                            var label = (obj && obj.label) ? obj.label : '';
                            var value = (obj && obj.value) ? obj.value : '';
                            if (tenMonField) tenMonField.setValue(label);
                            if (tenMonCodeField) tenMonCodeField.setValue(value);
                        }
                    });
                });
            };
            setTimeout(injectCaoDangSelects, 300);

            var caoDangTbody = $(diemThiCaoDangField.getFieldEl()).find('table tbody')[0];
            if (caoDangTbody) {
                var caoDangObserver = new MutationObserver(function (mutations) {
                    mutations.forEach(function (m) {
                        if (m.addedNodes.length > 0) {
                            setTimeout(injectCaoDangSelects, 200);
                        }
                    });
                });
                caoDangObserver.observe(caoDangTbody, { childList: true });
            }
        }
    },
    columns: {
        xaName: 'column-xaName',
            hoVaTen: 'column-hoVaTen',
                gender: 'column-gender',
                    birthDate: 'column-birthDate',
                        soCCCD: 'column-soCCCD',
                            danTocCode: 'column-danTocCode',
                                tonGiaoCode: 'column-tonGiaoCode',
                                    cityCode: 'column-cityCode',
                                        wardCode: 'column-wardCode',
                                            diaChiChiTiet: 'column-diaChiChiTiet',
                                                truongCode: 'column-truongCode',
                                                    truongName: 'column-truongCode',
                                                        nganhHocCode: 'column-nganhHocCode',
                                                            trinhDoDaoTaoCode: 'column-trinhDoDaoTaoCode',
                                                                doiTuongUuTien: 'column-doiTuongUuTien',
                                                                    doiTuongUuTienName: 'column-doiTuongUuTienName',
                                                                        daTotNghiep: 'column-daTotNghiep',
                                                                            ngayThiTotNghiep: 'column-ngayThiTotNghiep',
                                                                                hocLucLop10: 'column-hocLucLop10',
                                                                                    hanhKiemLop10: 'column-hanhKiemLop10',
                                                                                        diemTongKetLop10: 'column-diemTongKetLop10',
                                                                                            hocLucLop11: 'column-hocLucLop11',
                                                                                                hanhKiemLop11: 'column-hanhKiemLop11',
                                                                                                    diemTongKetLop11: 'column-diemTongKetLop11',
                                                                                                        hocLucLop12: 'column-hocLucLop12',
                                                                                                            hanhKiemLop12: 'column-hanhKiemLop12',
                                                                                                                diemTongKetLop12: 'column-diemTongKetLop12',
                                                                                                                    diemThiTHPT: 'column-diemThiTHPT',
                                                                                                                        diemThiCaoDang: 'column-diemThiCaoDang',
                                                                                                                            doatGiai: 'column-doatGiai',
                                                                                                                                nguoiLienHe: 'column-nguoiLienHe',
    },
    view: {
        layout: {
            template:
            "<div class='f1-alpaca' style='font-family: Times New Roman, serif; font-size: 14pt; width: 100%; margin: 0 auto; line-height: 1.5;'>\
            <style>\
            .f1-alpaca .f1-form-row { display: flex; margin-bottom: 15px; gap: 20px; }\
            .f1-alpaca .f1-form-group { display: flex; flex-direction: column; }\
            .f1-alpaca .f1-form-group-half { width: calc(50% - 10px); }\
            .f1-alpaca .f1-form-group-third { width: calc(33.33% - 14px); }\
            .f1-alpaca .f1-form-group-full { width: 100%; }\
            .f1-alpaca .f1-form-label { font-weight: normal; margin-bottom: 5px; color: #333; font-size: 13pt; }\
            .f1-alpaca .f1-form-label-required::after { content: ' *'; color: red; }\
            .f1-alpaca .f1-form-control { background-color: transparent; padding: 0; border: 0; }\
            .f1-alpaca .f1-form-control input[type='text'],\
            .f1-alpaca .f1-form-control input[type='date'],\
            .f1-alpaca .f1-form-control select {\
                font-family: Times New Roman, serif; font-size: 14pt;\
                border: 1px solid #ccc; border-radius: 4px; height: 40px !important; padding: 8px 12px;\
                background: #fff; width: 100%; box-sizing: border-box;\
            }\
            .f1-alpaca .f1-form-control textarea {\
                font-family: Times New Roman, serif; font-size: 14pt;\
                border: 1px solid #ccc; border-radius: 4px; padding: 8px 12px;\
                background: #fff; width: 100%; box-sizing: border-box;\
            }\
            .f1-alpaca .f1-form-control input[type='text']:focus,\
            .f1-alpaca .f1-form-control input[type='date']:focus,\
            .f1-alpaca .f1-form-control select:focus,\
            .f1-alpaca .f1-form-control textarea:focus { border-color: #4a90d9; outline: 0; box-shadow: 0 0 0 2px rgba(74,144,217,0.2); }\
            .f1-alpaca .alpaca-control-radio-label { display: inline-flex; align-items: center; margin-right: 25px; cursor: pointer; }\
            .f1-alpaca .alpaca-control-radio-label input[type='radio'] { width: 18px; height: 18px; margin-right: 6px; cursor: pointer; }\
            .f1-alpaca .f1-section-title { font-weight: bold; font-size: 14pt; margin: 25px 0 15px 0; padding-bottom: 8px; border-bottom: 2px solid #333; color: #333; }\
            .f1-alpaca .f1-form-control .alpaca-field-table { width: 100%; }\
            .f1-alpaca .f1-form-control .alpaca-field-table .alpaca-icon-required { display: none; }\
            .f1-alpaca .f1-form-control .alpaca-field-table table { width: 100%; border-collapse: collapse; }\
            .f1-alpaca .f1-form-control .alpaca-field-table table th { background: #f8f8f8; font-weight: bold; color: #333; text-align: center; border: 1px solid #ccc; padding: 10px; }\
            .f1-alpaca .f1-form-control .alpaca-field-table table td { border: 1px solid #ccc; padding: 10px; text-align: center; background: #fff; }\
            .f1-alpaca .f1-form-control .alpaca-array-toolbar { margin-bottom: 10px; }\
            .f1-alpaca .f1-form-control .alpaca-array-toolbar button { background: #4a90d9; color: #fff; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-size: 14pt; }\
            .f1-alpaca .f1-form-control .alpaca-array-toolbar button:hover { background: #3a7bc8; }\
            .f1-alpaca .f1-form-control .alpaca-array-actionbar button { background: transparent; border: none; cursor: pointer; }\
            .f1-alpaca .f1-form-control .alpaca-array-actionbar button:hover i { color: #000; }\
            #column-diemThiTHPT .alpaca-array-toolbar { display: none !important; }\
            </style>\
            <div style='padding: 25px; background: #f5f5f5;'>\
            <!-- Row 1: Họ và tên + Giới tính -->\
            <div class='f1-form-row'>\
                <div class='f1-form-group f1-form-group-half'>\
                <label class='f1-form-label f1-form-label-required'>Họ và tên người đăng ký học</label>\
                <div class='f1-form-control' id='column-hoVaTen'></div>\
                </div>\
                <div class='f1-form-group f1-form-group-half'>\
                <label class='f1-form-label f1-form-label-required'>Nam/nữ</label>\
                <div class='f1-form-control' id='column-gender'></div>\
                </div>\
            </div>\
            <!-- Row 2: Ngày sinh + CCCD -->\
            <div class='f1-form-row'>\
                <div class='f1-form-group f1-form-group-half'>\
                <label class='f1-form-label f1-form-label-required'>Ngày, tháng, năm sinh</label>\
                <div class='f1-form-control' id='column-birthDate'></div>\
                </div>\
                <div class='f1-form-group f1-form-group-half'>\
                <label class='f1-form-label f1-form-label-required'>CCCD/CMND/Hộ chiếu</label>\
                <div class='f1-form-control' id='column-soCCCD'></div>\
                </div>\
            </div>\
            <!-- Row 3: Dân tộc + Tôn giáo -->\
            <div class='f1-form-row'>\
                <div class='f1-form-group f1-form-group-half'>\
                <label class='f1-form-label f1-form-label-required'>Dân tộc</label>\
                <div class='f1-form-control' id='column-danTocCode'></div>\
                </div>\
                <div class='f1-form-group f1-form-group-half'>\
                <label class='f1-form-label f1-form-label-required'>Tôn giáo</label>\
                <div class='f1-form-control' id='column-tonGiaoCode'></div>\
                </div>\
            </div>\
            <!-- Row 4: Địa chỉ thường trú -->\
            <div class='f1-form-row'>\
                <div class='f1-form-group f1-form-group-half'>\
                <label class='f1-form-label f1-form-label-required'>Địa chỉ thường trú - Tỉnh/Thành phố</label>\
                <div class='f1-form-control' id='column-cityCode'></div>\
                </div>\
                <div class='f1-form-group f1-form-group-half'>\
                <label class='f1-form-label'>&nbsp;</label>\
                <div class='f1-form-control' id='column-wardCode'></div>\
                </div>\
            </div>\
            <!-- Row 5: Địa chỉ chi tiết -->\
            <div class='f1-form-row'>\
                <div class='f1-form-group f1-form-group-full'>\
                <div class='f1-form-control' id='column-diaChiChiTiet'></div>\
                </div>\
            </div>\
            <!-- Row 6: Trường + Ngành học + Trình độ đào tạo -->\
            <div class='f1-form-row'>\
                <div class='f1-form-group f1-form-group-third'>\
                <label class='f1-form-label f1-form-label-required'>Trường dự định đăng ký</label>\
                <div class='f1-form-control' id='column-truongCode'></div>\
                </div>\
                <div class='f1-form-group f1-form-group-third'>\
                <label class='f1-form-label f1-form-label-required'>Ngành dự định xin học</label>\
                <div class='f1-form-control' id='column-nganhHocCode'></div>\
                </div>\
                <div class='f1-form-group f1-form-group-third'>\
                <label class='f1-form-label f1-form-label-required'>Trình độ đào tạo</label>\
                <div class='f1-form-control' id='column-trinhDoDaoTaoCode'></div>\
                </div>\
            </div>\
            <!-- Row 7: Đối tượng ưu tiên -->\
            <div class='f1-form-row'>\
                <div class='f1-form-group f1-form-group-full'>\
                <label class='f1-form-label f1-form-label-required'>Thuộc đối tượng ưu tiên</label>\
                <div class='f1-form-control' id='column-doiTuongUuTien'></div>\
                <div class='f1-form-control' id='column-doiTuongUuTienName' style='display:none;'></div>\
                </div>\
            </div>\
            <!-- Row 8: Đã tốt nghiệp + Thời gian tốt nghiệp -->\
            <div class='f1-form-row'>\
                <div class='f1-form-group f1-form-group-half'>\
                <label class='f1-form-label f1-form-label-required'>Đã tốt nghiệp</label>\
                <div class='f1-form-control' id='column-daTotNghiep'></div>\
                </div>\
                <div class='f1-form-group f1-form-group-half'>\
                <label class='f1-form-label f1-form-label-required'>Ngày, tháng, năm dự thi tốt nghiệp</label>\
                <div class='f1-form-control' id='column-ngayThiTotNghiep'></div>\
                </div>\
            </div>\
            <!-- Row 9: Xếp loại 3 năm -->\
            <div class='f1-form-row'>\
                <div class='f1-form-group f1-form-group-third'>\
                <label class='f1-form-label'>Xếp loại năm lớp 10 - Học lực</label>\
                <div class='f1-form-control' id='column-hocLucLop10'></div>\
                </div>\
                <div class='f1-form-group f1-form-group-third'>\
                <label class='f1-form-label'>Hạnh kiểm</label>\
                <div class='f1-form-control' id='column-hanhKiemLop10'></div>\
                </div>\
                <div class='f1-form-group f1-form-group-third'>\
                <label class='f1-form-label'>Điểm tổng kết</label>\
                <div class='f1-form-control' id='column-diemTongKetLop10'></div>\
                </div>\
            </div>\
            <div class='f1-form-row'>\
                <div class='f1-form-group f1-form-group-third'>\
                <label class='f1-form-label'>Xếp loại năm lớp 11 - Học lực</label>\
                <div class='f1-form-control' id='column-hocLucLop11'></div>\
                </div>\
                <div class='f1-form-group f1-form-group-third'>\
                <label class='f1-form-label'>Hạnh kiểm</label>\
                <div class='f1-form-control' id='column-hanhKiemLop11'></div>\
                </div>\
                <div class='f1-form-group f1-form-group-third'>\
                <label class='f1-form-label'>Điểm tổng kết</label>\
                <div class='f1-form-control' id='column-diemTongKetLop11'></div>\
                </div>\
            </div>\
            <div class='f1-form-row'>\
                <div class='f1-form-group f1-form-group-third'>\
                <label class='f1-form-label f1-form-label-required'>Xếp loại năm lớp 12 - Học lực</label>\
                <div class='f1-form-control' id='column-hocLucLop12'></div>\
                </div>\
                <div class='f1-form-group f1-form-group-third'>\
                <label class='f1-form-label f1-form-label-required'>Hạnh kiểm</label>\
                <div class='f1-form-control' id='column-hanhKiemLop12'></div>\
                </div>\
                <div class='f1-form-group f1-form-group-third'>\
                <label class='f1-form-label f1-form-label-required'>Điểm tổng kết</label>\
                <div class='f1-form-control' id='column-diemTongKetLop12'></div>\
                </div>\
            </div>\
            <!-- Điểm thi các môn THPT -->\
            <div class='f1-section-title'>Điểm thi các môn thi THPT</div>\
            <div class='f1-form-row'>\
                <div class='f1-form-group f1-form-group-full'>\
                <div class='f1-form-control' id='column-diemThiTHPT'></div>\
                </div>\
            </div>\
            <!-- Điểm thi cao đẳng, đại học -->\
            <div class='f1-section-title'>Điểm thi cao đẳng, đại học, trung cấp (nếu có)</div>\
            <div class='f1-form-row'>\
                <div class='f1-form-group f1-form-group-full'>\
                <div class='f1-form-control' id='column-diemThiCaoDang'></div>\
                </div>\
            </div>\
            <!-- Đoạt giải -->\
            <div class='f1-section-title'>Đoạt giải (nếu có)</div>\
            <div class='f1-form-row'>\
                <div class='f1-form-group f1-form-group-full'>\
                <div class='f1-form-control' id='column-doatGiai'></div>\
                </div>\
            </div>\
            <!-- Thông tin liên hệ -->\
            <p>Tôi xin cam đoan những lời khai trên là đúng sự thật. Nếu sai, tôi xin chịu trách nhiệm xử lý theo quy định của pháp luật.</p>\
            <p>Nếu được chấp nhận, tôi xin cam kết: Chấp hành đầy đủ các quy định của Nhà nước đối với người học theo chế độ cử tuyển, sau khi tốt nghiệp chấp hành nghiêm sự bố trí việc làm của Bộ Quốc phòng.</p>\
            <div class='f1-section-title'>Thông tin liên hệ</div>\
            <div class='f1-form-row'>\
                <div class='f1-form-group f1-form-group-full'>\
                <label class='f1-form-label'>Khi cần báo tin cho ai</label>\
                <div class='f1-form-control' id='column-nguoiLienHe'></div>\
                </div>\
            </div>\
            <div style='display:none'><div id='column-xaName'></div></div>\
            </div>\
        </div>",
                bindings: {
                xaName: 'column-xaName',
                    hoVaTen: 'column-hoVaTen',
                        gender: 'column-gender',
                            birthDate: 'column-birthDate',
                                soCCCD: 'column-soCCCD',
                                    danTocCode: 'column-danTocCode',
                                        tonGiaoCode: 'column-tonGiaoCode',
                                            cityCode: 'column-cityCode',
                                                wardCode: 'column-wardCode',
                                                    diaChiChiTiet: 'column-diaChiChiTiet',
                                                        truongCode: 'column-truongCode',
                                                            truongName: 'column-truongName',
                                                                nganhHocCode: 'column-nganhHocCode',
                                                                    trinhDoDaoTaoCode: 'column-trinhDoDaoTaoCode',
                                                                        doiTuongUuTien: 'column-doiTuongUuTien',
                                                                            doiTuongUuTienName: 'column-doiTuongUuTienName',
                                                                                daTotNghiep: 'column-daTotNghiep',
                                                                                    ngayThiTotNghiep: 'column-ngayThiTotNghiep',
                                                                                        hocLucLop10: 'column-hocLucLop10',
                                                                                            hanhKiemLop10: 'column-hanhKiemLop10',
                                                                                                diemTongKetLop10: 'column-diemTongKetLop10',
                                                                                                    hocLucLop11: 'column-hocLucLop11',
                                                                                                        hanhKiemLop11: 'column-hanhKiemLop11',
                                                                                                            diemTongKetLop11: 'column-diemTongKetLop11',
                                                                                                                hocLucLop12: 'column-hocLucLop12',
                                                                                                                    hanhKiemLop12: 'column-hanhKiemLop12',
                                                                                                                        diemTongKetLop12: 'column-diemTongKetLop12',
                                                                                                                            diemThiTHPT: 'column-diemThiTHPT',
                                                                                                                                diemThiCaoDang: 'column-diemThiCaoDang',
                                                                                                                                    doatGiai: 'column-doatGiai',
                                                                                                                                        nguoiLienHe: 'column-nguoiLienHe',
        },
        },
        parent: 'bootstrap-edit',
            fields: { },
    },
    init: function () {
        console.log('Form TSQS initialized');
    },
}