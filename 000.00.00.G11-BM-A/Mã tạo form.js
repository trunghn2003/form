{
    schema: {
        type: 'object',
            required: false,
                properties: {
            soPhieu: {
                type: 'string',
                    maxLength: 50,
                        required: false,
      },
            // Nơi nộp hồ sơ đăng ký sơ tuyển
            noiNopHsCityCode: {
                type: 'string',
                    maxLength: 50,
                        required: true,
      },
            noiNopHsCityName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
      },
            noiNopHsWardCode: {
                type: 'string',
                    maxLength: 50,
                        required: true,
      },
            noiNopHsWardName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
      },
            // Trường ĐKST và đăng ký xét tuyển nguyện vọng 1
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
            maXetTuyenCode: {
                type: 'string',
                    maxLength: 50,
                        required: true,
      },
            maXetTuyenName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
      },
            // Tổ hợp các môn đăng ký xét tuyển dự kiến
            toHopMonCode: {
                type: 'string',
                    maxLength: 50,
                        required: true,
      },
            toHopMonName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
      },
            // Thông tin cá nhân
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
            // Nơi đăng ký khai sinh
            noiKhaiSinhCityCode: {
                type: 'string',
                    maxLength: 50,
                        required: true,
      },
            noiKhaiSinhCityName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
      },
            noiKhaiSinhWardCode: {
                type: 'string',
                    maxLength: 50,
                        required: true,
      },
            noiKhaiSinhWardName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
      },
            noiKhaiSinhChiTiet: {
                type: 'string',
                    maxLength: 500,
                        required: false,
      },
            // Địa chỉ thường trú
            thuongTruCityCode: {
                type: 'string',
                    maxLength: 50,
                        required: true,
      },
            thuongTruCityName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
      },
            thuongTruWardCode: {
                type: 'string',
                    maxLength: 50,
                        required: true,
      },
            thuongTruWardName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
      },
            thuongTruChiTiet: {
                type: 'string',
                    maxLength: 500,
                        required: false,
      },
            // Dân tộc, Tôn giáo
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
            // Nơi học THPT - Lớp 10
            lop10CityCode: {
                type: 'string',
                    maxLength: 50,
                        required: false,
      },
            lop10CityName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
      },
            lop10MaTruong: {
                type: 'string',
                    maxLength: 50,
                        required: false,
      },
            lop10TruongName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
      },
            lop10KhuVucUuTien: {
                type: 'string',
                    maxLength: 50,
                        required: false,
      },
            // Nơi học THPT - Lớp 11
            lop11CityCode: {
                type: 'string',
                    maxLength: 50,
                        required: false,
      },
            lop11CityName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
      },
            lop11MaTruong: {
                type: 'string',
                    maxLength: 50,
                        required: false,
      },
            lop11TruongName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
      },
            lop11KhuVucUuTien: {
                type: 'string',
                    maxLength: 50,
                        required: false,
      },
            // Nơi học THPT - Lớp 12
            lop12CityCode: {
                type: 'string',
                    maxLength: 50,
                        required: false,
      },
            lop12CityName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
      },
            lop12MaTruong: {
                type: 'string',
                    maxLength: 50,
                        required: false,
      },
            lop12TruongName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
      },
            lop12KhuVucUuTien: {
                type: 'string',
                    maxLength: 50,
                        required: false,
      },
            // Khu vực nơi học THPT
            khuVucNoiHocTHPTCode: {
                type: 'string',
                    maxLength: 50,
                        required: true,
      },
            khuVucNoiHocTHPTName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
      },
            // Năm tốt nghiệp THPT
            namTotNghiepTHPT: {
                type: 'string',
                    maxLength: 4,
                        required: true,
      },
            // Ưu tiên theo khu vực nơi đóng quân nhân
            khuVucDongQuanCode: {
                type: 'string',
                    maxLength: 50,
                        required: false,
      },
            khuVucDongQuanName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
      },
            ngayNhapNgu: {
                type: 'string',
                    maxLength: 20,
                        required: false,
      },
            // Nơi đóng quân
            noiDongQuanCityCode: {
                type: 'string',
                    maxLength: 50,
                        required: false,
      },
            noiDongQuanCityName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
      },
            noiDongQuanWardCode: {
                type: 'string',
                    maxLength: 50,
                        required: false,
      },
            noiDongQuanWardName: {
                type: 'string',
                    maxLength: 255,
                        required: false,
      },
            noiDongQuanChiTiet: {
                type: 'string',
                    maxLength: 500,
                        required: false,
      },
            // Đối tượng ưu tiên
            doiTuongUuTienCode: {
                type: 'string',
                    maxLength: 50,
                        required: true,

      },
            doiTuongUuTienName: {
                type: 'string',
                    maxLength: 255,
                        required: true,
      },
            // CCCD
            soCCCD: {
                type: 'string',
                    maxLength: 50,
                        required: true,
      },
            // Đối tượng sơ tuyển
            doiTuongSoTuyen: {
                type: 'string',
                    required: true,
        default: '0',
      },
            // Cam đoan
            camDoan: {
                type: 'boolean',
                    required: false,
      },
        },
    },
    data: {
        soPhieu: '',
  },
    options: {
        type: 'object',
            fields: {
            soPhieu: {
                type: 'text',
                    label: '',
                        // placeholder: 'Nhập số phiếu',
                        title: 'Số phiếu',
                            fieldClass: 'f2-form-input-100',
                                readonly: true,
                                    required: false,
        default: '',
      },
            // Nơi nộp hồ sơ đăng ký sơ tuyển
            noiNopHsCityCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Tỉnh/Thành phố',
                            title: 'Nơi nộp hồ sơ - Tỉnh/Thành phố',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
      },
            noiNopHsCityName: {
                type: 'hidden',
      },
            noiNopHsWardCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Xã/Phường',
                            title: 'Nơi nộp hồ sơ - Xã/Phường',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
      },
            noiNopHsWardName: {
                type: 'hidden',
      },
            // Trường ĐKST và đăng ký xét tuyển nguyện vọng 1
            truongCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Tên trường/Ký hiệu trường',
                            title: 'Trường ĐKST',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
      },
            truongName: {
                type: 'hidden',
      },
            maXetTuyenCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Chọn mã xét tuyển',
                            title: 'Mã xét tuyển',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
      },
            maXetTuyenName: {
                type: 'hidden',
      },
            // Tổ hợp các môn đăng ký xét tuyển dự kiến
            toHopMonCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Chọn tổ hợp môn',
                            title: 'Tổ hợp các môn đăng ký xét tuyển dự kiến',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
      },
            toHopMonName: {
                type: 'hidden',
      },
            // Thông tin cá nhân
            hoVaTen: {
                type: 'text',
                    label: '',
                        placeholder: 'Nhập họ và tên',
                            title: 'Họ, chữ đệm và tên',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
      },
            gender: {
                type: 'radio',
                    label: '',
                        title: 'Nam/nữ',
                            fieldClass: 'f2-form-input-100',
                                readonly: false,
                                    required: true,
        default: '',
                    removeDefaultNone: true,
                        vertical: false,
                            optionLabels: ['Nam', 'Nữ'],
                                dataSource: [
                                    { value: "0", text: 'Nam' },
                                    { value: "1", text: 'Nữ' }
                                ],
      },
            birthDate: {
                type: 'date',
                    label: '',
                        placeholder: 'DD/MM/YYYY',
                            title: 'Ngày, tháng, năm sinh',
                                dateFormat: 'DD/MM/YYYY',
                                    fieldClass: 'f2-form-input-100',
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
            // Nơi đăng ký khai sinh
            noiKhaiSinhCityCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Tỉnh/Thành phố',
                            title: 'Nơi đăng ký khai sinh - Tỉnh/Thành phố',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
      },
            noiKhaiSinhCityName: {
                type: 'hidden',
      },
            noiKhaiSinhWardCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Xã/Phường',
                            title: 'Nơi đăng ký khai sinh - Xã/Phường',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
      },
            noiKhaiSinhWardName: {
                type: 'hidden',
      },
            noiKhaiSinhChiTiet: {
                type: 'text',
                    label: '',
                        placeholder: 'Chi rõ thôn, bản...',
                            title: 'Nơi đăng ký khai sinh - Chi tiết',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: false,
        default: '',
      },
            // Địa chỉ thường trú
            thuongTruCityCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Tỉnh/Thành phố',
                            title: 'Địa chỉ thường trú - Tỉnh/Thành phố',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
      },
            thuongTruCityName: {
                type: 'hidden',
      },
            thuongTruWardCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Xã/Phường',
                            title: 'Địa chỉ thường trú - Xã/Phường',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
      },
            thuongTruWardName: {
                type: 'hidden',
      },
            thuongTruChiTiet: {
                type: 'text',
                    label: '',
                        placeholder: 'Chi rõ thôn, bản...',
                            title: 'Địa chỉ thường trú - Chi tiết',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: false,
        default: '',
      },
            // Dân tộc, Tôn giáo
            danTocCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Chọn dân tộc',
                            title: 'Dân tộc',
                                fieldClass: 'f2-form-input-100',
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
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
      },
            tonGiaoName: {
                type: 'hidden',
      },
            // Nơi học THPT - Lớp 10
            lop10CityCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Tỉnh/Thành phố',
                            title: 'Lớp 10 - Tỉnh/Thành phố',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: false,
        default: '',
      },
            lop10CityName: {
                type: 'hidden',
      },
            lop10MaTruong: {
                type: 'text',
                    label: '',
                        placeholder: 'Mã trường',
                            title: 'Lớp 10 - Mã trường',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: false,
        default: '',
      },
            lop10TruongName: {
                type: 'hidden',
      },
            lop10KhuVucUuTien: {
                type: 'text',
                    label: '',
                        placeholder: 'Khu vực ưu tiên',
                            title: 'Lớp 10 - Khu vực ưu tiên',
                                fieldClass: 'f2-form-input-100',
                                    readonly: true,
                                        required: false,
        default: '',
      },
            // Nơi học THPT - Lớp 11
            lop11CityCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Tỉnh/Thành phố',
                            title: 'Lớp 11 - Tỉnh/Thành phố',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: false,
        default: '',
      },
            lop11CityName: {
                type: 'hidden',
      },
            lop11MaTruong: {
                type: 'text',
                    label: '',
                        placeholder: 'Mã trường',
                            title: 'Lớp 11 - Mã trường',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: false,
        default: '',
      },
            lop11TruongName: {
                type: 'hidden',
      },
            lop11KhuVucUuTien: {
                type: 'text',
                    label: '',
                        placeholder: 'Khu vực ưu tiên',
                            title: 'Lớp 11 - Khu vực ưu tiên',
                                fieldClass: 'f2-form-input-100',
                                    readonly: true,
                                        required: false,
        default: '',
      },
            // Nơi học THPT - Lớp 12
            lop12CityCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Tỉnh/Thành phố',
                            title: 'Lớp 12 - Tỉnh/Thành phố',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: false,
        default: '',
      },
            lop12CityName: {
                type: 'hidden',
      },
            lop12MaTruong: {
                type: 'text',
                    label: '',
                        placeholder: 'Mã trường',
                            title: 'Lớp 12 - Mã trường',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: false,
        default: '',
      },
            lop12TruongName: {
                type: 'hidden',
      },
            lop12KhuVucUuTien: {
                type: 'text',
                    label: '',
                        placeholder: 'Khu vực ưu tiên',
                            title: 'Lớp 12 - Khu vực ưu tiên',
                                fieldClass: 'f2-form-input-100',
                                    readonly: true,
                                        required: false,
        default: '',
      },
            // Khu vực nơi học THPT
            khuVucNoiHocTHPTCode: {
                type: 'text',
                    label: '',
                        // placeholder: 'Chọn khu vực nơi học THPT',
                        title: 'Khu vực nơi học THPT',
                            fieldClass: 'f2-form-input-100',
                                readonly: true,
                                    required: true,
        default: '',
      },
            khuVucNoiHocTHPTName: {
                type: 'hidden',
      },
            // Năm tốt nghiệp THPT
            namTotNghiepTHPT: {
                type: 'text',
                    label: '',
                        placeholder: 'yyyy',
                            title: 'Năm tốt nghiệp THPT',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
                    validator: function(callback) {
                        var v = this.getValue && this.getValue() || '';
                        var s = String(v).trim();
                        var ok = /^[0-9]{4}$/.test(s);
                        callback({
                            status: ok,
                            // Hiển thị dòng cảnh báo ngay dưới ô khi không đủ 4 số
                            message: ok || !s ? "" : "Năm tốt nghiệp phải là 1 năm có 4 chữ số (yyyy)."
                        });
                    },
            },
            // Ưu tiên theo khu vực nơi đóng quân nhân
            khuVucDongQuanCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Chọn khu vực',
                            title: 'Khu vực đóng quân',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: false,
        default: '',
      },
            khuVucDongQuanName: {
                type: 'hidden',
      },
            ngayNhapNgu: {
                type: 'date',
                    label: '',
                        placeholder: 'DD/MM/YYYY',
                            title: 'Ngày tháng năm nhập ngũ',
                                dateFormat: 'DD/MM/YYYY',
                                    fieldClass: 'f2-form-input-100',
                                        readonly: false,
                                            required: false,
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
            // Nơi đóng quân
            noiDongQuanCityCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Tỉnh/Thành phố',
                            title: 'Nơi đóng quân - Tỉnh/Thành phố',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: false,
        default: '',
      },
            noiDongQuanCityName: {
                type: 'hidden',
      },
            noiDongQuanWardCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Xã/Phường',
                            title: 'Nơi đóng quân - Xã/Phường',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: false,
        default: '',
      },
            noiDongQuanWardName: {
                type: 'hidden',
      },
            noiDongQuanChiTiet: {
                type: 'text',
                    label: '',
                        placeholder: 'Chi rõ thôn, bản...',
                            title: 'Nơi đóng quân - Chi tiết',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: false,
        default: '',
      },
            // Đối tượng ưu tiên
            doiTuongUuTienCode: {
                type: 'text',
                    label: '',
                        placeholder: 'Chọn đối tượng ưu tiên',
                            title: 'Đối tượng ưu tiên',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
      },
            doiTuongUuTienName: {
                type: 'hidden',
      },
            // CCCD
            soCCCD: {
                type: 'text',
                    label: '',
                        placeholder: 'Nhập số CCCD/CMND/Hộ chiếu',
                            title: 'CCCD/CMND/Hộ chiếu',
                                fieldClass: 'f2-form-input-100',
                                    readonly: false,
                                        required: true,
        default: '',
      },
            // Đối tượng sơ tuyển
            doiTuongSoTuyen: {
                type: 'radio',
                    label: '',
                        title: 'Đối tượng sơ tuyển',
                            fieldClass: 'f2-form-input-100',
                                readonly: false,
                                    required: true,
        default: '0',
                    removeDefaultNone: true,
                        vertical: false,
                            optionLabels: ['Thanh niên', 'Quân nhân'],
                                dataSource: [
                                    { value: "0", text: 'Thanh niên' },
                                    { value: "1", text: 'Quân nhân' }
                                ],
      },
            // Cam đoan
            camDoan: {
                type: 'checkbox',
                    label: '',
                        title: '',
                            fieldClass: 'f2-form-input-100',
                                readonly: false,
                                    required: false,
        default: false,
                    rightLabel: 'Tôi xin cam đoan những lời khai trên là đúng sự thật. Nếu sai, tôi xin chịu trách nhiệm xử lý theo quy định của pháp luật. Nếu được chấp nhận, tôi xin cam kết: Chấp hành đầy đủ các quy định của Nhà nước đối với người học theo chế độ cử tuyển, sau khi tốt nghiệp chấp hành nghiêm sự bố trí việc làm của Bộ Quốc phòng.',
      },
        },
        form: {
            buttons: { },
        },
    },
    postRender: function (control) {
        // Get saved form data for restoring dropdown values after AJAX loads
        var savedData = control.data || {};

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

        // Restore doiTuongSoTuyen radio button
        var doiTuongSoTuyenField = control.childrenByPropertyId['doiTuongSoTuyen'];
        if (doiTuongSoTuyenField) {
            var doiTuongSoTuyenRadios = $(doiTuongSoTuyenField.getFieldEl()).find('input[type="radio"]');
            if (savedData.doiTuongSoTuyen !== undefined && savedData.doiTuongSoTuyen !== null && savedData.doiTuongSoTuyen !== '') {
                // Có dữ liệu lưu rồi thì khôi phục lại
                doiTuongSoTuyenRadios.each(function () {
                    if ($(this).val() == savedData.doiTuongSoTuyen) {
                        $(this).prop('checked', true);
                    }
                });
            } else {
                doiTuongSoTuyenRadios.each(function () {
                    if ($(this).val() == '0') {
                        $(this).prop('checked', true);
                    }
                });
            }
        }

        // Live validation + numeric-only for Năm tốt nghiệp THPT
        var namTotField = control.childrenByPropertyId['namTotNghiepTHPT'];
        if (namTotField) {
            var $namInput = $(namTotField.getFieldEl()).find('input[type="text"]');
            if ($namInput.length) {
                // Tạo vùng hiển thị thông báo ngay dưới input
                var $namContainer = $(namTotField.getFieldEl());
                var $namMsg = $namContainer.find('.f2-namTotNghiep-msg');
                if ($namMsg.length === 0) {
                    $namMsg = $("<div class='f2-namTotNghiep-msg'></div>");
                    $namMsg.css({
                        'font-size': '11pt',
                        'color': 'red',
                        'margin-top': '4px'
                    });
                    $namContainer.append($namMsg);
                }

                // Chỉ cho phép nhập số, tối đa 4 ký tự
                $namInput.on('input', function () {
                    var raw = this.value || '';
                    var digits = raw.replace(/[^0-9]/g, '').slice(0, 4);
                    if (digits !== this.value) {
                        this.value = digits;
                    }
                    var s = String(this.value || '').trim();
                    if (!s || /^[0-9]{4}$/.test(s)) {
                        $namMsg.text('');
                    } else {
                        $namMsg.text('Năm tốt nghiệp phải là 1 năm có 4 chữ số (yyyy).');
                    }
                });
            }
        }

        // ===== AUTOCOMPLETE FUNCTION =====
        function resolveApiUrl(apiUrl) {
            if (!apiUrl) return new URL(document.location.origin);
            return /^https?:\/\//i.test(apiUrl)
                ? new URL(apiUrl)
                : new URL(apiUrl, document.location.origin);
        }

        function normalizeApiItem(item) {
            if (!item) return item;
            if (!item.itemCode && item.codeView) {
                item.itemCode = item.codeView;
            }
            if (!item.itemName && item.name) {
                item.itemName = item.name;
            }
            return item;
        }

        function getApiItems(payload) {
            return payload.items || payload.data || [];
        }

        function autocomplete(
            selectFetch,
            {
                api,
                keyStart,
                keyEnd,
                pageKey,
                pageSizeKey,
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
            let nodeName = selectFetch.nodeName;
            let textSearch = "";
            let labelDefault = label;
            let currentFocus = -1;
            let noApi = optionDefault.length;
            let valueChangeOld = valueChange && valueChange();
            let currentLabel = label;
            let isComposing = false;
            let styleInnerHtml = `
          .input-label {
            overflow: hidden;
            display: block;
            width: 100%;
            background-image: url("https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-down-512.png");
            background-repeat: no-repeat;
            background-position: right 24px center;
            background-size: 16px 16px;
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
            z-index: 99999999999999999999;
          }
          .select-items div {
            padding: 0px 7px;
            cursor: pointer;
            min-height: 27px;
            display: flex;
            align-items: center;
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
            // Thay thế toàn bộ inpfocusout
            const inpfocusout = () => {
                setTimeout(() => {
                    typeping && (inp.value = currentLabel || labelDefault);
                    textSearch = "";
                    clearM();
                    items.classList.add("select-hide");
                }, 200); // delay để mousedown/click kịp xử lý
            };
            const triggerSearch = debounce(function () {
                closeAllSelect();
                clearM();
                getData(true);
            });
            const inpInput = function (e) {
                if (isComposing) return;
                typeping = true;
                textSearch = e && e.target ? e.target.value : inp.value;
                triggerSearch();
            };
            const clearM = () => {
                start = 0;
                final = false;
                arrayData = [];
                currentFocus = -1;
            };
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
            inp.addEventListener("compositionstart", function () {
                isComposing = true;
            });
            inp.addEventListener("compositionend", function () {
                isComposing = false;
                inpInput({ target: inp });
            });
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
                // Thông báo cho onchange biết là đã xóa lựa chọn (dùng cho logic disable xã/mã ngành, v.v.)
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

            // Bọc input trong container để gắn nút clear bên trong
            parent.style.position = parent.style.position || "relative";
            parent.appendChild(inp);

            // Icon mũi tên hiển thị dropdown
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
            // Thêm hàm selectItem dùng chung - đặt trước getData
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
                    let urlBase = resolveApiUrl(api);
                    if (pageKey) {
                        urlBase.searchParams.set(pageKey, Math.floor(start / number) + 1);
                    } else {
                        keyStart && urlBase.searchParams.set(keyStart, start);
                    }
                    if (pageSizeKey) {
                        urlBase.searchParams.set(pageSizeKey, number);
                    } else {
                        keyEnd && urlBase.searchParams.set(keyEnd, start + number);
                    }
                    typeping && keySearch && urlBase.searchParams.set(keySearch, textSearch);

                    keyChange && valueChange() && urlBase.searchParams.set(keyChange, valueChange());

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
                        var total = p.totalItems || p.total || 0;
                        final = (total && start >= total) || (arrayData && arrayData.length < number);
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
                    // c.onclick = function (e) {
                    //   typeping = false;
                    //   inp.value = optLabel;
                    //   currentLabel = optLabel;
                    //   items.querySelectorAll("div").forEach((d) => d.removeAttribute("class"));
                    //   this.setAttribute("class", "same-as-selected");
                    //   labelDefault = optLabel;
                    //   selectFetch.value = value;
                    //   selectFetch.dispatchEvent(new Event("change"));
                    //   onchange({
                    //     label: optLabel,
                    //     value: value,
                    //     item: option,
                    //   });
                    //   start = 0;
                    //   currentFocus = -1;
                    //   textSearch = "";
                    //   final = false;
                    // };
                    c.onmousedown = function (e) {
                        e.preventDefault();
                        selectItem(optLabel, value, option);  // ✅ dùng 'option'
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

        // ===== AUTOCOMPLETE FIELD CONFIGURATIONS =====
        var noiNopHsWardAutoRef = null;
        var maXetTuyenAutoRef = null;
        var noiKhaiSinhWardAutoRef = null;
        var thuongTruWardAutoRef = null;
        var lop10MaTruongAutoRef = null;
        var lop11MaTruongAutoRef = null;
        var lop12MaTruongAutoRef = null;
        var noiDongQuanWardAutoRef = null;

        var khuVucOptions = [
            { value: 'KV1', text: 'KV1' },
            { value: 'KV2-NT', text: 'KV2-NT' },
            { value: 'KV2', text: 'KV2' },
            { value: 'KV3', text: 'KV3' }
        ];

        var doiTuongUuTienOptions = [
            { value: '00', text: '00 - Không' },
            { value: '01', text: '01 - Công dân Việt Nam là người dân tộc thiểu số có nơi thường trú trong thời gian học THPT hoặc trung cấp trên 18 tháng tại Khu vực 1' },
            { value: '02', text: '02 - Công nhân trực tiếp sản xuất đã làm việc liên tục 5 năm trở lên, trong đó có ít nhất 2 năm là chiến sĩ thi đua được cấp tỉnh trở lên công nhận và cấp bằng khen' },
            { value: '03', text: '03 - Thương binh, bệnh binh, người có Giấy chứng nhận người được hưởng chính sách như thương binh;Quân nhân; sĩ quan, hạ sĩ quan, chiến sĩ nghĩa vụ trong Công an nhân dân tại ngũ được cử đi học có thời gian phục vụ từ 12 tháng trở lên tại Khu vực 1;Quân nhân; sĩ quan, hạ sĩ quan, chiến sĩ nghĩa vụ trong Công an nhân dân tại ngũ được cử đi học có thời gian phục vụ từ 18 tháng trở lên;Quân nhân; sĩ quan, hạ sĩ quan, chiến sĩ nghĩa vụ trong Công an nhân dân đã xuất ngũ, được công nhận hoàn thành nghĩa vụ phục vụ tại ngũ theo quy định.' },
            { value: '04', text: '04 - Thân nhân liệt sĩ;Con thương binh, con bệnh binh, con của người được hưởng chính sách như thương binh bị suy giảm khả năng lao động từ 81% trở lên;Con của người hoạt động kháng chiến bị nhiễm chất độc hóa học bị suy giảm khả năng lao động 81% trở lên;Con của Anh hùng Lực lượng vũ trang nhân dân;Con của Anh hùng Lao động trong thời kỳ kháng chiến;Con của người hoạt động kháng chiến bị dị dạng, dị tật do hậu quả của chất độc hóa học đang hưởng trợ cấp hàng tháng.' },
            { value: '05', text: '05 - Thanh niên xung phong tập trung được cử đi học;Quân nhân; sĩ quan, hạ sĩ quan, chiến sĩ nghĩa vụ trong Công an nhân dân tại ngũ được cử đi học có thời gian phục vụ dưới 12 tháng ở Khu vực 1 và dưới 18 tháng ở khu vực khác;Chỉ huy trưởng, Chỉ huy phó ban chỉ huy quân sự xã, phường, thị trấn;Thôn đội trưởng, Trung đội trưởng Dân quân tự vệ nòng cốt, Dân quân tự vệ đã hoàn thành nghĩa vụ tham gia Dân quân tự vệ nòng cốt từ 12 tháng trở lên, dự thi vào ngành Quân sự cơ sở. Thời hạn tối đa được hưởng ưu tiên là 18 tháng kể từ ngày ký quyết định xuất ngũ đến ngày ĐKXT.' },
            { value: '06', text: '06 - Công dân Việt Nam là người dân tộc thiểu số có nơi thường trú ở ngoài khu vực đã quy định thuộc đối tượng 01;Con thương binh, con bệnh binh, con của người được hưởng chính sách như thương binh bị suy giảm khả năng lao động dưới 81%;Con của người hoạt động kháng chiến bị nhiễm chất độc hóa học có tỷ lệ suy giảm khả năng lao động dưới 81%.' },
            { value: '07', text: '07 - Người khuyết tật nặng có giấy xác nhận khuyết tật của cơ quan có thẩm quyền cấp theo quy định tại Thông tư liên tịch 37/2012/TTLT-BLĐTBXH-BYT-BTC-BGDĐT quy định về việc xác định mức độ khuyết tật do Hội đồng xác định mức độ khuyết tật thực hiện;Người lao động ưu tú thuộc tất cả thành phần kinh tế từ cấp tỉnh, cấp bộ trở lên được công nhận danh hiệu thợ giỏi, nghệ nhân, được cấp bằng hoặc huy hiệu Lao động sáng tạo của Tổng Liên đoàn Lao động Việt Nam hoặc Trung ương Đoàn TNCS Hồ Chí Minh;Giáo viên đã giảng dạy đủ 3 năm trở lên dự tuyển vào các ngành đào tạo giáo viên;Y tá, dược tá, hộ lý, y sĩ, điều dưỡng viên, hộ sinh viên, kỹ thuật viên, người có bằng trung cấp Dược đã công tác đủ 3 năm trở lên dự tuyển vào đúng ngành tốt nghiệp thuộc lĩnh vực sức khỏe.' }
        ];

        // Auto-compute khuVucNoiHocTHPT from lop10/11/12 khuVuc
        function autoComputeKhuVucNoiHocTHPT() {
            var kv10 = (control.childrenByPropertyId['lop10KhuVucUuTien'] || {}).getValue ? control.childrenByPropertyId['lop10KhuVucUuTien'].getValue() : '';
            var kv11 = (control.childrenByPropertyId['lop11KhuVucUuTien'] || {}).getValue ? control.childrenByPropertyId['lop11KhuVucUuTien'].getValue() : '';
            var kv12 = (control.childrenByPropertyId['lop12KhuVucUuTien'] || {}).getValue ? control.childrenByPropertyId['lop12KhuVucUuTien'].getValue() : '';
            var result = '';
            if (kv12 && (kv12 === kv10 || kv12 === kv11)) {
                result = kv12;
            } else if (kv11 && kv11 === kv10) {
                result = kv11;
            } else if (kv12) {
                result = kv12;
            } else if (kv11) {
                result = kv11;
            } else if (kv10) {
                result = kv10;
            }
            if (result) {
                setAutocompleteValue('khuVucNoiHocTHPTCode', result, result);
                if (control.childrenByPropertyId['khuVucNoiHocTHPTName']) {
                    control.childrenByPropertyId['khuVucNoiHocTHPTName'].setValue(result);
                }
            }
        }

        [
            // === Nơi nộp hồ sơ ===
            {
                id: 'noiNopHsCityCode',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: 'https://tuyensinhfull.id.io.vn/api/ArmyEdu/armyedu?page=1&pageSize=86&codeView=&name=&note=',
                searchKey: 'name',
                pageKey: 'page',
                pageSizeKey: 'pageSize',
                fData: function (p) {
                    return getApiItems(p).map(normalizeApiItem);
                },
                label: savedData.noiNopHsCityName || '',
                onchange: function (obj) {
                    if (control.childrenByPropertyId['noiNopHsCityName']) {
                        control.childrenByPropertyId['noiNopHsCityName'].setValue(obj.label);
                    }
                    if (noiNopHsWardAutoRef) {
                        noiNopHsWardAutoRef.clear();
                        if (obj.value) {
                            noiNopHsWardAutoRef.enable();
                        } else {
                            noiNopHsWardAutoRef.disable();
                        }
                    }
                    if (control.childrenByPropertyId['noiNopHsWardName']) {
                        control.childrenByPropertyId['noiNopHsWardName'].setValue('');
                    }
                },
            },
            {
                id: 'noiNopHsWardCode',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: 'https://tuyensinhfull.id.io.vn/api/ArmyEduOrg/armyeduorg?page=1&pageSize=10&codeView=&name=&note=&armyEduCode=',
                searchKey: 'name',
                pageKey: 'page',
                pageSizeKey: 'pageSize',
                fData: function (p) {
                    return getApiItems(p).map(normalizeApiItem);
                },
                label: savedData.noiNopHsWardName || '',
                keyChange: 'armyEduCode',
                valueChange: function () {
                    var f = control.childrenByPropertyId['noiNopHsCityCode'];
                    return f ? f.getValue() : '';
                },
                onchange: function (obj) {
                    if (control.childrenByPropertyId['noiNopHsWardName']) {
                        control.childrenByPropertyId['noiNopHsWardName'].setValue(obj.label);
                    }
                },
            },
            // === Trường ĐKST ===
            {
                id: 'truongCode',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: '/o/rest/v2/dictcollections/UNIVERSITY/dictitems',
                searchKey: 'keywords',
                label: savedData.truongName || '',
                onchange: function (obj) {
                    if (control.childrenByPropertyId['truongName']) {
                        control.childrenByPropertyId['truongName'].setValue(obj.label);
                    }
                    if (maXetTuyenAutoRef) {
                        maXetTuyenAutoRef.clear();
                        if (obj.value) {
                            maXetTuyenAutoRef.enable();
                        } else {
                            maXetTuyenAutoRef.disable();
                        }
                    }
                    if (control.childrenByPropertyId['maXetTuyenName']) {
                        control.childrenByPropertyId['maXetTuyenName'].setValue('');
                    }
                },
            },
            // === Mã xét tuyển (cascading from truongCode) ===
            {
                id: 'maXetTuyenCode',
                keyLabel: '_displayName',
                keyValue: 'itemCode',
                api: '/o/secure/rest/v2/tsqs/universityfield',
                label: savedData.maXetTuyenName || '',
                keyChange: 'universityCode',
                valueChange: function () {
                    var f = control.childrenByPropertyId['truongCode'];
                    return f ? f.getValue() : '';
                },
                fData: function (p) {
                    return (p.data || []).map(function (item) {
                        item.itemCode = item.field
                        item._displayName = item.itemCode;
                        return item;
                    });
                },
                onchange: function (obj) {
                    if (control.childrenByPropertyId['maXetTuyenName']) {
                        control.childrenByPropertyId['maXetTuyenName'].setValue(obj.label);
                    }
                },
            },
            // === Tổ hợp môn ===
            {
                id: 'toHopMonCode',
                keyLabel: '_displayName',
                keyValue: 'itemCode',
                api: '/o/secure/rest/v2/tsqs/educationgroup',
                label: savedData.toHopMonName || '',
                fData: function (p) {
                    return (p.data || []).map(function (item) {
                        item._displayName = item.codeView;
                        return item;
                    });
                },
                onchange: function (obj) {
                    if (control.childrenByPropertyId['toHopMonName']) {
                        control.childrenByPropertyId['toHopMonName'].setValue(obj.label);
                    }
                },
            },
            // === Nơi đăng ký khai sinh ===
            {
                id: 'noiKhaiSinhCityCode',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: '/o/secure/rest/v2/tsqs/address?type=0',
                searchKey: 'keywords',
                label: savedData.noiKhaiSinhCityName || '',
                onchange: function (obj) {
                    if (control.childrenByPropertyId['noiKhaiSinhCityName']) {
                        control.childrenByPropertyId['noiKhaiSinhCityName'].setValue(obj.label);
                    }
                    if (noiKhaiSinhWardAutoRef) {
                        noiKhaiSinhWardAutoRef.clear();
                        if (obj.value) {
                            noiKhaiSinhWardAutoRef.enable();
                        } else {
                            noiKhaiSinhWardAutoRef.disable();
                        }
                    }
                    if (control.childrenByPropertyId['noiKhaiSinhWardName']) {
                        control.childrenByPropertyId['noiKhaiSinhWardName'].setValue('');
                    }
                },
            },
            {
                id: 'noiKhaiSinhWardCode',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: '/o/secure/rest/v2/tsqs/address?type=1',
                searchKey: 'keywords',
                label: savedData.noiKhaiSinhWardName || '',
                keyChange: 'parentCode',
                valueChange: function () {
                    var f = control.childrenByPropertyId['noiKhaiSinhCityCode'];
                    return f ? f.getValue() : '';
                },
                onchange: function (obj) {
                    if (control.childrenByPropertyId['noiKhaiSinhWardName']) {
                        control.childrenByPropertyId['noiKhaiSinhWardName'].setValue(obj.label);
                    }
                },
            },
            // === Địa chỉ thường trú ===
            {
                id: 'thuongTruCityCode',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: '/o/secure/rest/v2/tsqs/address?type=0',
                searchKey: 'keywords',
                label: savedData.thuongTruCityName || '',
                onchange: function (obj) {
                    if (control.childrenByPropertyId['thuongTruCityName']) {
                        control.childrenByPropertyId['thuongTruCityName'].setValue(obj.label);
                    }
                    if (thuongTruWardAutoRef) {
                        thuongTruWardAutoRef.clear();
                        if (obj.value) {
                            thuongTruWardAutoRef.enable();
                        } else {
                            thuongTruWardAutoRef.disable();
                        }
                    }
                    if (control.childrenByPropertyId['thuongTruWardName']) {
                        control.childrenByPropertyId['thuongTruWardName'].setValue('');
                    }
                },
            },
            {
                id: 'thuongTruWardCode',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: '/o/secure/rest/v2/tsqs/address?type=1',
                searchKey: 'keywords',
                label: savedData.thuongTruWardName || '',
                keyChange: 'parentCode',
                valueChange: function () {
                    var f = control.childrenByPropertyId['thuongTruCityCode'];
                    return f ? f.getValue() : '';
                },
                onchange: function (obj) {
                    if (control.childrenByPropertyId['thuongTruWardName']) {
                        control.childrenByPropertyId['thuongTruWardName'].setValue(obj.label);
                    }
                },
            },
            // === Dân tộc ===
            {
                id: 'danTocCode',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: '/o/secure/rest/v2/tsqs/dictitem?collectionCode=ETHNIC_LIST',
                label: savedData.danTocName || '',
                number: 200,
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
            // === Tôn giáo ===
            {
                id: 'tonGiaoCode',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: '/o/secure/rest/v2/tsqs/dictitem?collectionCode=RELIGION_LIST',
                label: savedData.tonGiaoName || '',
                number: 200,
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
            // === Lớp 10 ===
            {
                id: 'lop10CityCode',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: '/o/secure/rest/v2/tsqs/address?type=0',
                searchKey: 'keywords',
                label: savedData.lop10CityName || '',
                onchange: function (obj) {
                    if (control.childrenByPropertyId['lop10CityName']) {
                        control.childrenByPropertyId['lop10CityName'].setValue(obj.label);
                    }
                    if (lop10MaTruongAutoRef) {
                        lop10MaTruongAutoRef.clear();
                        if (obj.value) {
                            lop10MaTruongAutoRef.enable();
                        } else {
                            lop10MaTruongAutoRef.disable();
                        }
                    }
                    if (control.childrenByPropertyId['lop10TruongName']) {
                        control.childrenByPropertyId['lop10TruongName'].setValue('');
                    }
                    if (control.childrenByPropertyId['lop10KhuVucUuTien']) {
                        control.childrenByPropertyId['lop10KhuVucUuTien'].setValue('');
                    }
                },
            },
            {
                id: 'lop10MaTruong',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: '/o/secure/rest/v2/tsqs/highschool',
                label: savedData.lop10TruongName || '',
                keyChange: 'provinceCode',
                valueChange: function () {
                    var f = control.childrenByPropertyId['lop10CityCode'];
                    return f ? f.getValue() : '';
                },
                onchange: function (obj) {
                    if (control.childrenByPropertyId['lop10TruongName']) {
                        control.childrenByPropertyId['lop10TruongName'].setValue(obj.label);
                    }
                    // Auto-set khuVuc from regionMarkCode
                    var kv = obj.item && obj.item.regionMarkCode ? obj.item.regionMarkCode : '';
                    setAutocompleteValue('lop10KhuVucUuTien', kv, kv);
                    autoComputeKhuVucNoiHocTHPT();
                },
            },
            {
                id: 'lop10KhuVucUuTien',
                keyLabel: 'text',
                keyValue: 'value',
                label: savedData.lop10KhuVucUuTien || '',
                // optionDefault: khuVucOptions,
                // onchange: function(obj) { autoComputeKhuVucNoiHocTHPT(); },
            },
            // === Lớp 11 ===
            {
                id: 'lop11CityCode',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: '/o/secure/rest/v2/tsqs/address?type=0',
                searchKey: 'keywords',
                label: savedData.lop11CityName || '',
                onchange: function (obj) {
                    if (control.childrenByPropertyId['lop11CityName']) {
                        control.childrenByPropertyId['lop11CityName'].setValue(obj.label);
                    }
                    if (lop11MaTruongAutoRef) {
                        lop11MaTruongAutoRef.clear();
                        if (obj.value) {
                            lop11MaTruongAutoRef.enable();
                        } else {
                            lop11MaTruongAutoRef.disable();
                        }
                    }
                    if (control.childrenByPropertyId['lop11TruongName']) {
                        control.childrenByPropertyId['lop11TruongName'].setValue('');
                    }
                    if (control.childrenByPropertyId['lop11KhuVucUuTien']) {
                        control.childrenByPropertyId['lop11KhuVucUuTien'].setValue('');
                    }
                },
            },
            {
                id: 'lop11MaTruong',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: '/o/secure/rest/v2/tsqs/highschool',
                label: savedData.lop11TruongName || '',
                keyChange: 'provinceCode',
                valueChange: function () {
                    var f = control.childrenByPropertyId['lop11CityCode'];
                    return f ? f.getValue() : '';
                },
                onchange: function (obj) {
                    if (control.childrenByPropertyId['lop11TruongName']) {
                        control.childrenByPropertyId['lop11TruongName'].setValue(obj.label);
                    }
                    var kv = obj.item && obj.item.regionMarkCode ? obj.item.regionMarkCode : '';
                    setAutocompleteValue('lop11KhuVucUuTien', kv, kv);
                    autoComputeKhuVucNoiHocTHPT();
                },
            },
            {
                id: 'lop11KhuVucUuTien',
                keyLabel: 'text',
                keyValue: 'value',
                label: savedData.lop11KhuVucUuTien || '',
                // optionDefault: khuVucOptions,
                // onchange: function(obj) { autoComputeKhuVucNoiHocTHPT(); },
            },
            // === Lớp 12 ===
            {
                id: 'lop12CityCode',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: '/o/secure/rest/v2/tsqs/address?type=0',
                searchKey: 'keywords',
                label: savedData.lop12CityName || '',
                onchange: function (obj) {
                    if (control.childrenByPropertyId['lop12CityName']) {
                        control.childrenByPropertyId['lop12CityName'].setValue(obj.label);
                    }
                    if (lop12MaTruongAutoRef) {
                        lop12MaTruongAutoRef.clear();
                        if (obj.value) {
                            lop12MaTruongAutoRef.enable();
                        } else {
                            lop12MaTruongAutoRef.disable();
                        }
                    }
                    if (control.childrenByPropertyId['lop12TruongName']) {
                        control.childrenByPropertyId['lop12TruongName'].setValue('');
                    }
                    if (control.childrenByPropertyId['lop12KhuVucUuTien']) {
                        control.childrenByPropertyId['lop12KhuVucUuTien'].setValue('');
                    }
                },
            },
            {
                id: 'lop12MaTruong',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: '/o/secure/rest/v2/tsqs/highschool',
                label: savedData.lop12TruongName || '',
                keyChange: 'provinceCode',
                valueChange: function () {
                    var f = control.childrenByPropertyId['lop12CityCode'];
                    return f ? f.getValue() : '';
                },
                onchange: function (obj) {
                    if (control.childrenByPropertyId['lop12TruongName']) {
                        control.childrenByPropertyId['lop12TruongName'].setValue(obj.label);
                    }
                    var kv = obj.item && obj.item.regionMarkCode ? obj.item.regionMarkCode : '';
                    setAutocompleteValue('lop12KhuVucUuTien', kv, kv);
                    autoComputeKhuVucNoiHocTHPT();
                },
            },
            {
                id: 'lop12KhuVucUuTien',
                keyLabel: 'text',
                keyValue: 'value',
                label: savedData.lop12KhuVucUuTien || '',
                // optionDefault: khuVucOptions,
                // onchange: function(obj) { autoComputeKhuVucNoiHocTHPT(); },
            },
            // === Khu vực nơi học THPT ===
            {
                id: 'khuVucNoiHocTHPTCode',
                keyLabel: 'text',
                keyValue: 'value',
                label: savedData.khuVucNoiHocTHPTName || '',
                optionDefault: khuVucOptions,
                onchange: function (obj) {
                    if (control.childrenByPropertyId['khuVucNoiHocTHPTName']) {
                        control.childrenByPropertyId['khuVucNoiHocTHPTName'].setValue(obj.label);
                    }
                },
            },
            // === Khu vực đóng quân ===
            {
                id: 'khuVucDongQuanCode',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: '/o/secure/rest/v2/tsqs/dictitem?collectionCode=RegionMark',
                label: savedData.khuVucDongQuanName || '',
                onchange: function (obj) {
                    if (control.childrenByPropertyId['khuVucDongQuanName']) {
                        control.childrenByPropertyId['khuVucDongQuanName'].setValue(obj.label);
                    }
                },
            },
            // === Nơi đóng quân ===
            {
                id: 'noiDongQuanCityCode',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: '/o/secure/rest/v2/tsqs/address?type=0',
                searchKey: 'keywords',
                label: savedData.noiDongQuanCityName || '',
                onchange: function (obj) {
                    if (control.childrenByPropertyId['noiDongQuanCityName']) {
                        control.childrenByPropertyId['noiDongQuanCityName'].setValue(obj.label);
                    }
                    if (noiDongQuanWardAutoRef) {
                        noiDongQuanWardAutoRef.clear();
                        if (obj.value) {
                            noiDongQuanWardAutoRef.enable();
                        } else {
                            noiDongQuanWardAutoRef.disable();
                        }
                    }
                    if (control.childrenByPropertyId['noiDongQuanWardName']) {
                        control.childrenByPropertyId['noiDongQuanWardName'].setValue('');
                    }
                },
            },
            {
                id: 'noiDongQuanWardCode',
                keyLabel: 'itemName',
                keyValue: 'itemCode',
                api: '/o/secure/rest/v2/tsqs/address?type=1',
                searchKey: 'keywords',
                label: savedData.noiDongQuanWardName || '',
                keyChange: 'parentCode',
                valueChange: function () {
                    var f = control.childrenByPropertyId['noiDongQuanCityCode'];
                    return f ? f.getValue() : '';
                },
                onchange: function (obj) {
                    if (control.childrenByPropertyId['noiDongQuanWardName']) {
                        control.childrenByPropertyId['noiDongQuanWardName'].setValue(obj.label);
                    }
                },
            },
            // === Đối tượng ưu tiên ===
            {
                id: 'doiTuongUuTienCode',
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
        ].forEach(function ({ id, keyLabel, keyValue, api, onchange, optionDefault, keyChange, valueChange, label: fieldLabel, fData: customFData, searchKey, pageKey, pageSizeKey, number: pageSizeOverride }) {
            var field = control.childrenByPropertyId[id];
            if (!field) return;
            var inputEl = $(field.getFieldEl()).find('input[type="text"]')[0];
            if (!inputEl) return;

            // For khu vực ưu tiên lớp 10,11,12 và Khu vực nơi học THPT:
            // không dùng autocomplete, chỉ cho auto-fill từ tính toán
            if (id === 'lop10KhuVucUuTien' || id === 'lop11KhuVucUuTien' || id === 'lop12KhuVucUuTien' || id === 'khuVucNoiHocTHPTCode') {
                $(inputEl).prop('readonly', true);
                return;
            }

            var f = autocomplete(inputEl, {
                api: api || '',
                fData: customFData || function (p) {
                    return getApiItems(p);
                },
                headers: {
                    Token: window.Liferay?.authToken || '',
                    groupId: (window.themeDisplay?.getScopeGroupId && window.themeDisplay.getScopeGroupId()) || 0,
                    Accept: 'application/json, text/plain, */*',
                },
                keyStart: 'start',
                keyEnd: 'end',
                pageKey: pageKey || '',
                pageSizeKey: pageSizeKey || '',
                start: 0,
                number: pageSizeOverride || 20,
                keyLabel: keyLabel,
                keyValue: keyValue,
                keySearch: searchKey || 'keyword',
                optionDefault: optionDefault || [],
                onchange: onchange,
                label: fieldLabel || '',
                keyChange: keyChange || '',
                valueChange: valueChange || function () { return 1; },
            });

            // Store cascading references
            if (id === 'noiNopHsWardCode') noiNopHsWardAutoRef = f;
            if (id === 'maXetTuyenCode') maXetTuyenAutoRef = f;
            if (id === 'noiKhaiSinhWardCode') noiKhaiSinhWardAutoRef = f;
            if (id === 'thuongTruWardCode') thuongTruWardAutoRef = f;
            if (id === 'lop10MaTruong') lop10MaTruongAutoRef = f;
            if (id === 'lop11MaTruong') lop11MaTruongAutoRef = f;
            if (id === 'lop12MaTruong') lop12MaTruongAutoRef = f;
            if (id === 'noiDongQuanWardCode') noiDongQuanWardAutoRef = f;

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

        // Helper: fetch items from API and find by name
        function fetchAndFindByName(apiUrl, name, callback, searchKey) {
            if (!name) return;
            var url = resolveApiUrl(apiUrl);
            url.searchParams.set(searchKey || 'keyword', name);
            if (url.hostname === 'tuyensinhfull.id.io.vn') {
                url.searchParams.set('page', 1);
                url.searchParams.set('pageSize', 50);
            } else {
                url.searchParams.append('start', 0);
                url.searchParams.append('end', 50);
            }
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url.toString(), true);
            Object.keys(apiHeaders).forEach(function (key) {
                xhr.setRequestHeader(key, apiHeaders[key]);
            });
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
                    try {
                        var response = JSON.parse(xhr.responseText);
                        var items = getApiItems(response).map(normalizeApiItem);
                        var found = null;
                        for (var i = 0; i < items.length; i++) {
                            if (items[i].itemName && items[i].itemName.trim().toLowerCase() === name.trim().toLowerCase()) {
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

        // Resolve city/ward pairs using TSQS address API
        var cityWardPairsToResolve = [
            { cityId: 'noiNopHsCityCode', cityNameId: 'noiNopHsCityName', wardId: 'noiNopHsWardCode', wardNameId: 'noiNopHsWardName', wardAutoRef: noiNopHsWardAutoRef, cityApi: 'https://tuyensinhfull.id.io.vn/api/ArmyEduOrg/armyeduorg?page=1&pageSize=10&codeView=&name=&note=&armyEduCode=', wardApi: 'https://tuyensinhfull.id.io.vn/api/ArmyEduOrg/armyeduorg?page=1&pageSize=10&codeView=&name=&note=&armyEduCode=', wardKeyChange: 'armyEduCode', citySearchKey: 'name', wardSearchKey: 'name' },
            { cityId: 'noiKhaiSinhCityCode', cityNameId: 'noiKhaiSinhCityName', wardId: 'noiKhaiSinhWardCode', wardNameId: 'noiKhaiSinhWardName', wardAutoRef: noiKhaiSinhWardAutoRef, cityApi: '/o/secure/rest/v2/tsqs/address?type=0', wardApi: '/o/secure/rest/v2/tsqs/address?type=1', wardKeyChange: 'parentCode' },
            { cityId: 'thuongTruCityCode', cityNameId: 'thuongTruCityName', wardId: 'thuongTruWardCode', wardNameId: 'thuongTruWardName', wardAutoRef: thuongTruWardAutoRef, cityApi: '/o/secure/rest/v2/tsqs/address?type=0', wardApi: '/o/secure/rest/v2/tsqs/address?type=1', wardKeyChange: 'parentCode' },
            { cityId: 'noiDongQuanCityCode', cityNameId: 'noiDongQuanCityName', wardId: 'noiDongQuanWardCode', wardNameId: 'noiDongQuanWardName', wardAutoRef: noiDongQuanWardAutoRef, cityApi: '/o/secure/rest/v2/tsqs/address?type=0', wardApi: '/o/secure/rest/v2/tsqs/address?type=1', wardKeyChange: 'parentCode' },
        ];

        // Track which cities are being resolved by name (to avoid premature disable)
        var citiesBeingResolved = {};

        cityWardPairsToResolve.forEach(function (pair) {
            var needResolveCityByName = savedData[pair.cityNameId] && !savedData[pair.cityId];
            var needResolveWardByName = savedData[pair.wardNameId] && !savedData[pair.wardId];

            if (needResolveCityByName) {
                citiesBeingResolved[pair.cityId] = true;
                fetchAndFindByName(
                    pair.cityApi,
                    savedData[pair.cityNameId],
                    function (found) {
                        if (found) {
                            setAutocompleteValue(pair.cityId, found.itemCode, found.itemName);
                            if (control.childrenByPropertyId[pair.cityNameId]) {
                                control.childrenByPropertyId[pair.cityNameId].setValue(found.itemName);
                            }
                            if (pair.wardAutoRef) {
                                pair.wardAutoRef.enable();
                            }
                            if (needResolveWardByName) {
                                fetchAndFindByName(
                                    pair.wardApi + '&' + pair.wardKeyChange + '=' + found.itemCode,
                                    savedData[pair.wardNameId],
                                    function (wardFound) {
                                        if (wardFound) {
                                            setAutocompleteValue(pair.wardId, wardFound.itemCode, wardFound.itemName);
                                            if (control.childrenByPropertyId[pair.wardNameId]) {
                                                control.childrenByPropertyId[pair.wardNameId].setValue(wardFound.itemName);
                                            }
                                        }
                                    },
                                    pair.wardSearchKey
                                );
                            }
                        }
                    },
                    pair.citySearchKey
                );
            } else if (needResolveWardByName && savedData[pair.cityId]) {
                fetchAndFindByName(
                    pair.wardApi + '&' + pair.wardKeyChange + '=' + savedData[pair.cityId],
                    savedData[pair.wardNameId],
                    function (wardFound) {
                        if (wardFound) {
                            setAutocompleteValue(pair.wardId, wardFound.itemCode, wardFound.itemName);
                            if (control.childrenByPropertyId[pair.wardNameId]) {
                                control.childrenByPropertyId[pair.wardNameId].setValue(wardFound.itemName);
                            }
                        }
                    }
                );
            }
        });

        // Resolve standalone city fields using TSQS address API (lop10, lop11, lop12)
        var standaloneCityFields = [
            { cityId: 'lop10CityCode', cityNameId: 'lop10CityName', api: '/o/secure/rest/v2/tsqs/address?type=0' },
            { cityId: 'lop11CityCode', cityNameId: 'lop11CityName', api: '/o/secure/rest/v2/tsqs/address?type=0' },
            { cityId: 'lop12CityCode', cityNameId: 'lop12CityName', api: '/o/secure/rest/v2/tsqs/address?type=0' },
        ];

        standaloneCityFields.forEach(function (item) {
            if (savedData[item.cityNameId] && !savedData[item.cityId]) {
                citiesBeingResolved[item.cityId] = true;
                fetchAndFindByName(
                    item.api,
                    savedData[item.cityNameId],
                    function (found) {
                        if (found) {
                            setAutocompleteValue(item.cityId, found.itemCode, found.itemName);
                            if (control.childrenByPropertyId[item.cityNameId]) {
                                control.childrenByPropertyId[item.cityNameId].setValue(found.itemName);
                            }
                        }
                    }
                );
            }
        });

        // ===== DISABLE DEPENDENT FIELDS IF PARENT NOT SELECTED =====
        var dependentPairs = [
            { parent: 'noiNopHsCityCode', child: noiNopHsWardAutoRef },
            { parent: 'noiKhaiSinhCityCode', child: noiKhaiSinhWardAutoRef },
            { parent: 'thuongTruCityCode', child: thuongTruWardAutoRef },
            { parent: 'noiDongQuanCityCode', child: noiDongQuanWardAutoRef },
            { parent: 'lop10CityCode', child: lop10MaTruongAutoRef },
            { parent: 'lop11CityCode', child: lop11MaTruongAutoRef },
            { parent: 'lop12CityCode', child: lop12MaTruongAutoRef },
            { parent: 'truongCode', child: maXetTuyenAutoRef },
        ];
        dependentPairs.forEach(function (pair) {
            if (pair.child) {
                var parentField = control.childrenByPropertyId[pair.parent];
                var parentValue = parentField ? parentField.getValue() : '';
                // Don't disable if parent is being resolved by name
                if (!parentValue && !citiesBeingResolved[pair.parent]) {
                    pair.child.disable();
                }
            }
        });
    },
    columns: {
        soPhieu: 'column-soPhieu',
            noiNopHsCityCode: 'column-noiNopHsCityCode',
                noiNopHsCityName: 'column-noiNopHsCityName',
                    noiNopHsWardCode: 'column-noiNopHsWardCode',
                        noiNopHsWardName: 'column-noiNopHsWardName',
                            truongCode: 'column-truongCode',
                                truongName: 'column-truongName',
                                    maXetTuyenCode: 'column-maXetTuyenCode',
                                        maXetTuyenName: 'column-maXetTuyenName',
                                            toHopMonCode: 'column-toHopMonCode',
                                                toHopMonName: 'column-toHopMonName',
                                                    hoVaTen: 'f2-column-hoVaTen',
                                                        gender: 'f2-column-gender',
                                                            birthDate: 'f2-column-birthDate',
                                                                noiKhaiSinhCityCode: 'column-noiKhaiSinhCityCode',
                                                                    noiKhaiSinhCityName: 'column-noiKhaiSinhCityName',
                                                                        noiKhaiSinhWardCode: 'column-noiKhaiSinhWardCode',
                                                                            noiKhaiSinhWardName: 'column-noiKhaiSinhWardName',
                                                                                noiKhaiSinhChiTiet: 'column-noiKhaiSinhChiTiet',
                                                                                    thuongTruCityCode: 'column-thuongTruCityCode',
                                                                                        thuongTruCityName: 'column-thuongTruCityName',
                                                                                            thuongTruWardCode: 'column-thuongTruWardCode',
                                                                                                thuongTruWardName: 'column-thuongTruWardName',
                                                                                                    thuongTruChiTiet: 'column-thuongTruChiTiet',
                                                                                                        danTocCode: 'f2-column-danTocCode',
                                                                                                            danTocName: 'column-danTocName',
                                                                                                                tonGiaoCode: 'f2-column-tonGiaoCode',
                                                                                                                    tonGiaoName: 'column-tonGiaoName',
                                                                                                                        lop10CityCode: 'column-lop10CityCode',
                                                                                                                            lop10CityName: 'column-lop10CityName',
                                                                                                                                lop10MaTruong: 'column-lop10MaTruong',
                                                                                                                                    lop10TruongName: 'column-lop10TruongName',
                                                                                                                                        lop10KhuVucUuTien: 'column-lop10KhuVucUuTien',
                                                                                                                                            lop11CityCode: 'column-lop11CityCode',
                                                                                                                                                lop11CityName: 'column-lop11CityName',
                                                                                                                                                    lop11MaTruong: 'column-lop11MaTruong',
                                                                                                                                                        lop11TruongName: 'column-lop11TruongName',
                                                                                                                                                            lop11KhuVucUuTien: 'column-lop11KhuVucUuTien',
                                                                                                                                                                lop12CityCode: 'column-lop12CityCode',
                                                                                                                                                                    lop12CityName: 'column-lop12CityName',
                                                                                                                                                                        lop12MaTruong: 'column-lop12MaTruong',
                                                                                                                                                                            lop12TruongName: 'column-lop12TruongName',
                                                                                                                                                                                lop12KhuVucUuTien: 'column-lop12KhuVucUuTien',
                                                                                                                                                                                    khuVucNoiHocTHPTCode: 'column-khuVucNoiHocTHPTCode',
                                                                                                                                                                                        khuVucNoiHocTHPTName: 'column-khuVucNoiHocTHPTName',
                                                                                                                                                                                            namTotNghiepTHPT: 'column-namTotNghiepTHPT',
                                                                                                                                                                                                khuVucDongQuanCode: 'column-khuVucDongQuanCode',
                                                                                                                                                                                                    khuVucDongQuanName: 'column-khuVucDongQuanName',
                                                                                                                                                                                                        ngayNhapNgu: 'column-ngayNhapNgu',
                                                                                                                                                                                                            noiDongQuanCityCode: 'column-noiDongQuanCityCode',
                                                                                                                                                                                                                noiDongQuanCityName: 'column-noiDongQuanCityName',
                                                                                                                                                                                                                    noiDongQuanWardCode: 'column-noiDongQuanWardCode',
                                                                                                                                                                                                                        noiDongQuanWardName: 'column-noiDongQuanWardName',
                                                                                                                                                                                                                            noiDongQuanChiTiet: 'column-noiDongQuanChiTiet',
                                                                                                                                                                                                                                doiTuongUuTienCode: 'column-doiTuongUuTienCode',
                                                                                                                                                                                                                                    doiTuongUuTienName: 'f2-column-doiTuongUuTienName',
                                                                                                                                                                                                                                        soCCCD: 'f2-column-soCCCD',
                                                                                                                                                                                                                                            doiTuongSoTuyen: 'column-doiTuongSoTuyen',
                                                                                                                                                                                                                                                camDoan: 'column-camDoan',
  },
    view: {
        layout: {
            template:
            "<div class='f2-alpaca' style='font-family: Times New Roman, serif; font-size: 14pt; width: 100%; margin: 0 auto; line-height: 1.5;'>\
          <style>\
            .f2-alpaca .f2-form-row { display: flex; margin-bottom: 15px; gap: 20px; }\
            .f2-alpaca .f2-form-row-muted { display: flex; margin-bottom: 15px; gap: 20px; }\
            .f2-alpaca .f2-form-group { display: flex; flex-direction: column; }\
            .f2-alpaca .f2-form-group-half { width: calc(50% - 10px); }\
            .f2-alpaca .f2-form-group-third { width: calc(33.33% - 14px); }\
            .f2-alpaca .f2-form-group-quarter { width: calc(25% - 15px); }\
            .f2-alpaca .f2-form-group-full { width: 100%; }\
            .f2-alpaca .f2-form-label { font-weight: normal; margin-bottom: 5px; color: #333; font-size: 13pt; }\
            .f2-alpaca .f2-form-label-required::after { content: ' *'; color: red; }\
            .f2-alpaca .f2-form-control { background-color: transparent; padding: 0; border: 0; }\
            .f2-alpaca .f2-form-control input[type='text'],\
            .f2-alpaca .f2-form-control input[type='date'],\
            .f2-alpaca .f2-form-control select,\
            .f2-alpaca .f2-form-control textarea {\
              font-family: Times New Roman, serif; font-size: 14pt;\
              border: 1px solid #ccc; border-radius: 4px; height: 40px !important; padding: 8px 12px;\
              background: #fff; width: 100%; box-sizing: border-box;\
            }\
            .f2-alpaca .f2-form-control input[type='text']:focus,\
            .f2-alpaca .f2-form-control input[type='date']:focus,\
            .f2-alpaca .f2-form-control select:focus,\
            .f2-alpaca .f2-form-control textarea:focus { border-color: #4a90d9; outline: 0; box-shadow: 0 0 0 2px rgba(74,144,217,0.2); }\            .f2-alpaca .alpaca-control-radio-label { display: inline-flex; align-items: center; margin-right: 25px; cursor: pointer; }\
            .f2-alpaca .alpaca-control-radio-label input[type='radio'] { width: 18px; height: 18px; margin-right: 6px; cursor: pointer; }\
            .f2-alpaca .f2-section-title { font-weight: bold; font-size: 14pt; margin: 25px 0 15px 0; padding-bottom: 8px; border-bottom: 2px solid #333; color: #333; }\
            .f2-alpaca .f2-header-left { text-align: left; }\
            .f2-alpaca .f2-header-right { text-align: right; }\
            .f2-alpaca .f2-thpt-table { width: 100%; border-collapse: collapse; margin: 15px 0; }\
            .f2-alpaca .f2-thpt-table th, .f2-alpaca .f2-thpt-table td { border: 1px solid #ccc; padding: 10px; text-align: center; }\
            .f2-alpaca .f2-thpt-table th { background: #f8f8f8; font-weight: bold; color: #333; }\
            .f2-alpaca .f2-thpt-table td { background: #fff; }\
            .f2-alpaca .f2-thpt-table select { width: 100%; min-height: 36px; }\
            .f2-alpaca .f2-inline-group { display: flex; gap: 20px; }\
            .f2-alpaca .f2-inline-group .f2-form-group { flex: 1; }\
            /* Số phiếu: chỉ bôi xám input riêng */\
            .f2-alpaca .f2-soPhieu-input input[type='text'] {\
              background-color: rgb(240, 240, 240) !important;\
            }\
          </style>\
          <div style='padding: 25px; background: #f5f5f5;'>\
            <!-- Header Section -->\
            <div style='display: flex; justify-content: space-between; margin-bottom: 25px;'>\
              <div class='f2-header-left'>\
                <p style='font-size: 14pt; font-weight: bold; margin: 0;'>BỘ QUỐC PHÒNG</p>\
                <p style='font-size: 13pt; font-weight: bold; margin: 0;'>BAN TUYỂN SINH QUÂN SỰ</p>\
              </div>\
              <div class='f2-header-right'>\
                <p style='font-size: 14pt; font-weight: bold; margin: 0;'>CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>\
                <p style='font-size: 13pt; font-weight: bold; margin: 0; text-decoration: underline;'>Độc lập - Tự do - Hạnh phúc</p>\
              </div>\
            </div>\
            <!-- Form Title -->\
            <div style='text-align: center; margin-bottom: 30px;'>\
              <h2 style='font-size: 16pt; font-weight: bold; text-transform: uppercase; margin: 20px 0;'>PHIẾU ĐĂNG KÝ SƠ TUYỂN, TUYỂN SINH ĐẠI HỌC, CAO ĐẲNG QUÂN SỰ NĂM 2026</h2>\
            </div>\
            <!-- Row: Số phiếu -->\
            <div class='f2-form-row-muted'>\
              <div class='f2-form-group f2-form-group-half'>\
                <label class='f2-form-label'>Số phiếu</label>\
                <div class='f2-form-control f2-soPhieu-input' id='column-soPhieu'></div>\
              </div>\
              <div class='f2-form-group f2-form-group-half'></div>\
            </div>\
            <!-- Row: Nơi nộp hồ sơ đăng ký sơ tuyển -->\
            <div class='f2-form-row'>\
              <div class='f2-form-group f2-form-group-half'>\
                <label class='f2-form-label f2-form-label-required'>Nơi nộp hồ sơ đăng ký sơ tuyển</label>\
                <div class='f2-form-control' id='column-noiNopHsCityCode'></div>\
                <div class='f2-form-control' id='column-noiNopHsCityName' style='display:none;'></div>\
              </div>\
              <div class='f2-form-group f2-form-group-half'>\
                <label class='f2-form-label'>&nbsp;</label>\
                <div class='f2-form-control' id='column-noiNopHsWardCode'></div>\
                <div class='f2-form-control' id='column-noiNopHsWardName' style='display:none;'></div>\
              </div>\
            </div>\
            <!-- Row: Trường ĐKST và Mã xét tuyển -->\
            <div class='f2-form-row'>\
              <div class='f2-form-group f2-form-group-half'>\
                <label class='f2-form-label f2-form-label-required'>Trường ĐKST và đăng ký xét tuyển nguyện vọng 1</label>\
                <div class='f2-form-control' id='column-truongCode'></div>\
                <div class='f2-form-control' id='column-truongName' style='display:none;'></div>\
              </div>\
              <div class='f2-form-group f2-form-group-half'>\
                <label class='f2-form-label f2-form-label-required'>Mã xét tuyển</label>\
                <div class='f2-form-control' id='column-maXetTuyenCode'></div>\
                <div class='f2-form-control' id='column-maXetTuyenName' style='display:none;'></div>\
              </div>\
            </div>\
            <!-- Row: Tổ hợp các môn đăng ký xét tuyển dự kiến -->\
            <div class='f2-form-row'>\
              <div class='f2-form-group f2-form-group-full'>\
                <label class='f2-form-label f2-form-label-required'>Tổ hợp các môn đăng ký xét tuyển dự kiến</label>\
                <div class='f2-form-control' id='column-toHopMonCode'></div>\
                <div class='f2-form-control' id='column-toHopMonName' style='display:none;'></div>\
              </div>\
            </div>\
            <!-- Row: Họ tên + Giới tính -->\
            <div class='f2-form-row'>\
              <div class='f2-form-group f2-form-group-half'>\
                <label class='f2-form-label f2-form-label-required'>Họ, chữ đệm và tên</label>\
                <div class='f2-form-control' id='f2-column-hoVaTen'></div>\
              </div>\
              <div class='f2-form-group f2-form-group-half'>\
                <label class='f2-form-label f2-form-label-required'>Nam/nữ</label>\
                <div class='f2-form-control' id='f2-column-gender'></div>\
              </div>\
            </div>\
            <!-- Row: Ngày sinh -->\
            <div class='f2-form-row'>\
              <div class='f2-form-group f2-form-group-half'>\
                <label class='f2-form-label f2-form-label-required'>Ngày, tháng, năm sinh</label>\
                <div class='f2-form-control' id='f2-column-birthDate'></div>\
              </div>\
              <div class='f2-form-group f2-form-group-half'></div>\
            </div>\
            <!-- Row: Nơi đăng ký khai sinh -->\
            <div class='f2-form-row'>\
              <div class='f2-form-group f2-form-group-half'>\
                <label class='f2-form-label f2-form-label-required'>Nơi đăng ký khai sinh</label>\
                <div class='f2-form-control' id='column-noiKhaiSinhCityCode'></div>\
                <div class='f2-form-control' id='column-noiKhaiSinhCityName' style='display:none;'></div>\
              </div>\
              <div class='f2-form-group f2-form-group-half'>\
                <label class='f2-form-label'>&nbsp;</label>\
                <div class='f2-form-control' id='column-noiKhaiSinhWardCode'></div>\
                <div class='f2-form-control' id='column-noiKhaiSinhWardName' style='display:none;'></div>\
              </div>\
            </div>\
            <!-- Row: Nơi khai sinh chi tiết -->\
            <div class='f2-form-row'>\
              <div class='f2-form-group f2-form-group-full'>\
                <div class='f2-form-control' id='column-noiKhaiSinhChiTiet'></div>\
              </div>\
            </div>\
            <!-- Row: Địa chỉ thường trú -->\
            <div class='f2-form-row'>\
              <div class='f2-form-group f2-form-group-half'>\
                <label class='f2-form-label f2-form-label-required'>Địa chỉ thường trú</label>\
                <div class='f2-form-control' id='column-thuongTruCityCode'></div>\
                <div class='f2-form-control' id='column-thuongTruCityName' style='display:none;'></div>\
              </div>\
              <div class='f2-form-group f2-form-group-half'>\
                <label class='f2-form-label'>&nbsp;</label>\
                <div class='f2-form-control' id='column-thuongTruWardCode'></div>\
                <div class='f2-form-control' id='column-thuongTruWardName' style='display:none;'></div>\
              </div>\
            </div>\
            <!-- Row: Địa chỉ thường trú chi tiết -->\
            <div class='f2-form-row'>\
              <div class='f2-form-group f2-form-group-full'>\
                <div class='f2-form-control' id='column-thuongTruChiTiet'></div>\
              </div>\
            </div>\
            <!-- Row: Dân tộc + Tôn giáo -->\
            <div class='f2-form-row'>\
              <div class='f2-form-group f2-form-group-half'>\
                <label class='f2-form-label f2-form-label-required'>Dân tộc</label>\
                <div class='f2-form-control' id='f2-column-danTocCode'></div>\
                <div class='f2-form-control' id='column-danTocName' style='display:none;'></div>\
              </div>\
              <div class='f2-form-group f2-form-group-half'>\
                <label class='f2-form-label f2-form-label-required'>Tôn giáo</label>\
                <div class='f2-form-control' id='f2-column-tonGiaoCode'></div>\
                <div class='f2-form-control' id='column-tonGiaoName' style='display:none;'></div>\
              </div>\
            </div>\
            <!-- Nơi học THPT Section -->\
            <div class='f2-section-title'>Nơi học THPT</div>\
            <table class='f2-thpt-table'>\
              <thead>\
                <tr>\
                  <th style='width: 15%;'>Năm học</th>\
                  <th style='width: 30%;'>Tỉnh/Thành phố</th>\
                  <th style='width: 30%;'>Mã trường</th>\
                  <th style='width: 25%;'>Khu vực ưu tiên</th>\
                </tr>\
              </thead>\
              <tbody>\
                <tr>\
                  <td>Năm lớp 10</td>\
                  <td><div class='f2-form-control' id='column-lop10CityCode'></div><div class='f2-form-control' id='column-lop10CityName' style='display:none;'></div></td>\
                  <td><div class='f2-form-control' id='column-lop10MaTruong'></div><div class='f2-form-control' id='column-lop10TruongName' style='display:none;'></div></td>\
                  <td><div class='f2-form-control' id='column-lop10KhuVucUuTien'></div></td>\
                </tr>\
                <tr>\
                  <td>Năm lớp 11</td>\
                  <td><div class='f2-form-control' id='column-lop11CityCode'></div><div class='f2-form-control' id='column-lop11CityName' style='display:none;'></div></td>\
                  <td><div class='f2-form-control' id='column-lop11MaTruong'></div><div class='f2-form-control' id='column-lop11TruongName' style='display:none;'></div></td>\
                  <td><div class='f2-form-control' id='column-lop11KhuVucUuTien'></div></td>\
                </tr>\
                <tr>\
                  <td>Năm lớp 12</td>\
                  <td><div class='f2-form-control' id='column-lop12CityCode'></div><div class='f2-form-control' id='column-lop12CityName' style='display:none;'></div></td>\
                  <td><div class='f2-form-control' id='column-lop12MaTruong'></div><div class='f2-form-control' id='column-lop12TruongName' style='display:none;'></div></td>\
                  <td><div class='f2-form-control' id='column-lop12KhuVucUuTien'></div></td>\
                </tr>\
              </tbody>\
            </table>\
            <!-- Row: Khu vực nơi học THPT + Năm tốt nghiệp THPT -->\
            <div class='f2-form-row'>\
              <div class='f2-form-group f2-form-group-half'>\
                <label class='f2-form-label f2-form-label'>Khu vực nơi học THPT</label>\
                <div class='f2-form-control f2-soPhieu-input' id='column-khuVucNoiHocTHPTCode'></div>\
                <div class='f2-form-control' id='column-khuVucNoiHocTHPTName' style='display:none;'></div>\
              </div>\
              <div class='f2-form-group f2-form-group-half'>\
                <label class='f2-form-label f2-form-label-required'>Năm tốt nghiệp THPT</label>\
                <div class='f2-form-control' id='column-namTotNghiepTHPT'></div>\
              </div>\
            </div>\
            <!-- Ưu tiên theo khu vực nơi đóng quân nhân Section -->\
            <div class='f2-section-title'>Ưu tiên theo khu vực nơi đóng quân nhân</div>\
            <!-- Row: Khu vực + Ngày nhập ngũ -->\
            <div class='f2-form-row'>\
              <div class='f2-form-group f2-form-group-half'>\
                <label class='f2-form-label'>Khu vực</label>\
                <div class='f2-form-control' id='column-khuVucDongQuanCode'></div>\
                <div class='f2-form-control' id='column-khuVucDongQuanName' style='display:none;'></div>\
              </div>\
              <div class='f2-form-group f2-form-group-half'>\
                <label class='f2-form-label'>Ngày tháng năm nhập ngũ</label>\
                <div class='f2-form-control' id='column-ngayNhapNgu'></div>\
              </div>\
            </div>\
            <!-- Row: Nơi đóng quân -->\
            <div class='f2-form-row'>\
              <div class='f2-form-group f2-form-group-half'>\
                <label class='f2-form-label'>Nơi đóng quân</label>\
                <div class='f2-form-control' id='column-noiDongQuanCityCode'></div>\
                <div class='f2-form-control' id='column-noiDongQuanCityName' style='display:none;'></div>\
              </div>\
              <div class='f2-form-group f2-form-group-half'>\
                <label class='f2-form-label'>&nbsp;</label>\
                <div class='f2-form-control' id='column-noiDongQuanWardCode'></div>\
                <div class='f2-form-control' id='column-noiDongQuanWardName' style='display:none;'></div>\
              </div>\
            </div>\
            <!-- Row: Nơi đóng quân chi tiết -->\
            <div class='f2-form-row'>\
              <div class='f2-form-group f2-form-group-full'>\
                <div class='f2-form-control' id='column-noiDongQuanChiTiet'></div>\
              </div>\
            </div>\
            <!-- Row: Đối tượng ưu tiên -->\
            <div class='f2-form-row'>\
              <div class='f2-form-group f2-form-group-full'>\
                <label class='f2-form-label f2-form-label-required'>Đối tượng ưu tiên</label>\
                <div class='f2-form-control' id='column-doiTuongUuTienCode'></div>\
                <div class='f2-form-control' id='f2-column-doiTuongUuTienName' style='display:none;'></div>\
              </div>\
            </div>\
            <!-- Row: CCCD -->\
            <div class='f2-form-row'>\
              <div class='f2-form-group f2-form-group-half'>\
                <label class='f2-form-label f2-form-label-required'>CCCD/CMND/Hộ chiếu</label>\
                <div class='f2-form-control' id='f2-column-soCCCD'></div>\
              </div>\
              <div class='f2-form-group f2-form-group-half'>\
                <label class='f2-form-label f2-form-label-required'>Đối tượng sơ tuyển</label>\
                <div class='f2-form-control' id='column-doiTuongSoTuyen'></div>\
              </div>\
            </div>\
            <!-- Row: Cam đoan -->\
            <div class='f2-form-row'>\
              <div class='f2-form-group f2-form-group-full'>\
                <div class='f2-form-control' id='column-camDoan'></div>\
              </div>\
            </div>\
          </div>\
        </div>",
                bindings: {
                soPhieu: 'column-soPhieu',
                    noiNopHsCityCode: 'column-noiNopHsCityCode',
                        noiNopHsCityName: 'column-noiNopHsCityName',
                            noiNopHsWardCode: 'column-noiNopHsWardCode',
                                noiNopHsWardName: 'column-noiNopHsWardName',
                                    truongCode: 'column-truongCode',
                                        truongName: 'column-truongName',
                                            maXetTuyenCode: 'column-maXetTuyenCode',
                                                maXetTuyenName: 'column-maXetTuyenName',
                                                    toHopMonCode: 'column-toHopMonCode',
                                                        toHopMonName: 'column-toHopMonName',
                                                            hoVaTen: 'f2-column-hoVaTen',
                                                                gender: 'f2-column-gender',
                                                                    birthDate: 'f2-column-birthDate',
                                                                        noiKhaiSinhCityCode: 'column-noiKhaiSinhCityCode',
                                                                            noiKhaiSinhCityName: 'column-noiKhaiSinhCityName',
                                                                                noiKhaiSinhWardCode: 'column-noiKhaiSinhWardCode',
                                                                                    noiKhaiSinhWardName: 'column-noiKhaiSinhWardName',
                                                                                        noiKhaiSinhChiTiet: 'column-noiKhaiSinhChiTiet',
                                                                                            thuongTruCityCode: 'column-thuongTruCityCode',
                                                                                                thuongTruCityName: 'column-thuongTruCityName',
                                                                                                    thuongTruWardCode: 'column-thuongTruWardCode',
                                                                                                        thuongTruWardName: 'column-thuongTruWardName',
                                                                                                            thuongTruChiTiet: 'column-thuongTruChiTiet',
                                                                                                                danTocCode: 'f2-column-danTocCode',
                                                                                                                    danTocName: 'column-danTocName',
                                                                                                                        tonGiaoCode: 'f2-column-tonGiaoCode',
                                                                                                                            tonGiaoName: 'column-tonGiaoName',
                                                                                                                                lop10CityCode: 'column-lop10CityCode',
                                                                                                                                    lop10CityName: 'column-lop10CityName',
                                                                                                                                        lop10MaTruong: 'column-lop10MaTruong',
                                                                                                                                            lop10TruongName: 'column-lop10TruongName',
                                                                                                                                                lop10KhuVucUuTien: 'column-lop10KhuVucUuTien',
                                                                                                                                                    lop11CityCode: 'column-lop11CityCode',
                                                                                                                                                        lop11CityName: 'column-lop11CityName',
                                                                                                                                                            lop11MaTruong: 'column-lop11MaTruong',
                                                                                                                                                                lop11TruongName: 'column-lop11TruongName',
                                                                                                                                                                    lop11KhuVucUuTien: 'column-lop11KhuVucUuTien',
                                                                                                                                                                        lop12CityCode: 'column-lop12CityCode',
                                                                                                                                                                            lop12CityName: 'column-lop12CityName',
                                                                                                                                                                                lop12MaTruong: 'column-lop12MaTruong',
                                                                                                                                                                                    lop12TruongName: 'column-lop12TruongName',
                                                                                                                                                                                        lop12KhuVucUuTien: 'column-lop12KhuVucUuTien',
                                                                                                                                                                                            khuVucNoiHocTHPTCode: 'column-khuVucNoiHocTHPTCode',
                                                                                                                                                                                                khuVucNoiHocTHPTName: 'column-khuVucNoiHocTHPTName',
                                                                                                                                                                                                    namTotNghiepTHPT: 'column-namTotNghiepTHPT',
                                                                                                                                                                                                        khuVucDongQuanCode: 'column-khuVucDongQuanCode',
                                                                                                                                                                                                            khuVucDongQuanName: 'column-khuVucDongQuanName',
                                                                                                                                                                                                                ngayNhapNgu: 'column-ngayNhapNgu',
                                                                                                                                                                                                                    noiDongQuanCityCode: 'column-noiDongQuanCityCode',
                                                                                                                                                                                                                        noiDongQuanCityName: 'column-noiDongQuanCityName',
                                                                                                                                                                                                                            noiDongQuanWardCode: 'column-noiDongQuanWardCode',
                                                                                                                                                                                                                                noiDongQuanWardName: 'column-noiDongQuanWardName',
                                                                                                                                                                                                                                    noiDongQuanChiTiet: 'column-noiDongQuanChiTiet',
                                                                                                                                                                                                                                        doiTuongUuTienCode: 'column-doiTuongUuTienCode',
                                                                                                                                                                                                                                            doiTuongUuTienName: 'f2-column-doiTuongUuTienName',
                                                                                                                                                                                                                                                soCCCD: 'f2-column-soCCCD',
                                                                                                                                                                                                                                                    doiTuongSoTuyen: 'column-doiTuongSoTuyen',
                                                                                                                                                                                                                                                        camDoan: 'column-camDoan',
      },
        },
        parent: 'bootstrap-edit',
            fields: { },
    },
    init: function () {
        console.log('Form2 TSQS initialized');
    },
}
    
