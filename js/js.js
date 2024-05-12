
  
        // tùy chọn ẩn các thông số của in
        var option_print_class = "1";
        var option_print_session = "1";
        var option_print_start = "1";
        var option_print_end = "1";
        var option_print_course = "1";
        var option_print_invoice = "1";
        var option_print_bill_item = "1";
        var option_print_parent_info = "1";
        var option_print_appointment = "1";
        var option_print_promotion = "1";
        var option_print_debit = "1";
        var option_print_discount_contract = "1";
        var option_print_receivables = "1";


        // tùy chọn hiển thị người ký
        var option_print_accountant = "0";
        var option_print_cashier = "0";
        var option_print_manage = "0";
        var option_print_garenal_director = "0";


        var english_print = {
            tenphieu: 'TUITION INVOICE',
            year: 'Year',
            month: 'Month',
            chinhanh: 'Branch',
            address: 'Address',
            banks: 'Bank Account',
            tel: 'Tel',
            tax: 'Tax Code',
            pay: 'Payment Method',
            receipt_voucher: 'Receipt Voucher',
            receipt_id: 'Receipt ID',
            receipt_date: 'Receipt Date',
            student: 'Student Name',
            student_id: 'Student ID',
            birthday: 'Birthday',
            parent: 'Parent',
            amount_paid: 'Amount',
            phone_number: 'Phone Number',
            stt: 'NO',
            namepro: 'Name of Goods and services',
            unit: 'Unit',
            invoice_id: 'Invoice ID',
            class: 'Class',
            lessons_number: 'Lessons Number',
            start_date: 'Start Date',
            end_date: 'End Date',
            total_fee: 'Unit Price',
            course_promotion: 'Course Promotion',
            invoice_promotion: 'Invoice Promotion',
            accumulate_promotion: 'Accumulate Promotion',
            already_paid: 'Already Paid',
            outstanding: 'Outstanding',
            add_ons: ' Add-ons',
            quantity: 'Quantity',
            promotion: 'Discount',
            payment_appointment: 'Payment Appointment',
            appointment: 'Appointment',
            date: 'Date',
            amount: 'Amount',
            promotion_program: 'Promotion Program',
            note: 'Notes',
            payer: 'Payer',
            signature: 'Signature',
            full_name: 'Full name',
            collector: 'Collector',
            accountant: 'Accountant',
            garenal_director: 'Director',
            total_amount_paid: 'Total Amount Paid',
            payment_method: 'Payment Method',
            cash: 'Cash',
            bank_tranfer: 'Bank Tranfer',
            credit_card: 'Credit Card',
            co_wallet: 'CO Wallet',
            vnpay: 'VNPAY',
            bill: 'Bill',
            receipt: 'Receipt',
            and_bonus: 'and bonus',
            total_amount_in_words: 'Total amount in words',
            reason_for_deduction: 'Reason for deduction',
            enter_reason_for_deduction: 'Enter reason for deduction',
            paid: 'Paid',
            unpaid: 'Unpaid',
            cashier: 'Cashier',
            manage: 'Manager',
            select_an_option: 'Select an option',
            bill_item: 'Bill item',
            parent_info: 'Parent info',
            debit: 'Debit',
            landscape: 'Landscape',
            portrait: 'Portrait',
            split: 'Split',
            show_user: 'Show user',
            print: 'Print',
            close: 'Close',
            discount_contract: 'Discount of contract',
            receivables: 'Receivables'
        };
        var tieng_viet = {
            tenphieu: 'HÓA ĐƠN THANH TOÁN',
            address: 'Địa chỉ',
            banks: 'Số Tài Khoản',
            year: 'Năm',
            month: 'Tháng / Đợt',
            chinhanh: 'Chi Nhánh',
            tel: 'Điện Thoại',
            tax: 'Mã số Thuế',
            pay: 'Phương Thức Thanh Toán',
            receipt_voucher: 'HÓA ĐƠN THU TIỀN',
            receipt_id: 'Mã HĐ',
            stt: 'STT',
            namepro: 'Tên Hàng Hóa / Dịch Vụ',
            receipt_date: 'Ngày thanh toán',
            student: 'Tên Học Sinh',
            student_id: 'Mã học viên',
            birthday: 'Ngày sinh',
            parent: 'Phụ huynh',
            amount_paid: 'Thành tiền',
            phone_number: 'SĐT',
            unit: 'Đơn vị',
            invoice_id: 'Khóa học',
            class: 'Lớp học',
            lessons_number: 'Số buổi',
            start_date: 'Bắt đầu',
            end_date: "Kết thúc",
            total_fee: 'Đơn Giá',
            course_promotion: 'ƯĐKH',
            invoice_promotion: 'ƯĐHĐ',
            accumulate_promotion: 'ƯĐTĐ',
            already_paid: 'Trả trước',
            outstanding: 'Còn nợ',
            add_ons: 'Vật phẩm/Khoản thu',
            quantity: 'Số lượng',
            promotion: 'Giảm Giá',
            payment_appointment: 'Lịch hẹn đóng tiền',
            appointment: 'Lịch hẹn',
            date: 'Ngày hẹn',
            amount: 'Số tiền',
            promotion_program: 'Chương trình ưu đãi',
            note: 'Ghi chú',
            payer: 'Người nộp',
            signature: 'Ký',
            full_name: 'ghi rõ họ tên',
            collector: 'Người lập phiếu',
            accountant: 'Kế toán',
            manage: 'Quản lý',
            cashier: 'Thủ quỹ',
            garenal_director: 'Giám đốc',
            total_amount_paid: 'Tổng tiền thanh toán',
            payment_method: 'Hình thức thanh toán',
            cash: 'Tiền mặt',
            bank_tranfer: 'Chuyển khoản ngân hàng',
            credit_card: 'Thanh toán qua thẻ',
            co_wallet: 'Ví tiền CO',
            vnpay: 'Thanh toán bằng vnpay',
            bill: 'Hóa đơn',
            receipt: 'Hợp đồng',
            and_bonus: 'và tặng',
            total_amount_in_words: 'Bằng chữ',
            reason_for_deduction: 'Ghi chú',
            enter_reason_for_deduction: 'Nhập lý do giảm trừ',
            paid: 'Đã trả',
            unpaid: 'Chưa trả',
            select_an_option: 'Chọn hiển thị',
            bill_item: 'Thu thêm',
            parent_info: 'Phụ huynh',
            debit: 'Còn nợ',
            landscape: 'Khổ ngang',
            portrait: 'Khổ dọc',
            split: 'Chia đôi',
            show_user: 'Hiển thị tên người lập phiếu',
            print: 'In',
            close: 'Đóng',
            discount_contract: 'GGTT',
            receivables: 'Tổng phải thu'
            // discount_contract: 'Giảm trực tiếp',
        }
        var list_value_select2 = [];


        render_language();

        function initPrint() {
            $('#select-setup-print').select2({
                placeholder: 'Tùy chọn ký'
            });
            $('#select-option-print').select2({
                placeholder: 'Tùy chọn ẩn'
            });
            $('#select-setup-print').on('select2:select', function (e) {
                list_value_select2.push(e.params.data.id)
                var value_select = $('#select-setup-print').val();
                list_select = value_select;
                if (value_select.length == 3) {
                    $('#select-setup-print').val([list_value_select2[list_value_select2.length - 2], list_value_select2[list_value_select2.length - 1]]).trigger('change');
                    $('#show_signature').find('.center').removeAttr('class').addClass('text-center col-3');
                }
                if (value_select.length == 2) {
                    $('#setup-print').addClass('heigth-90px');
                    $('#show_signature').find('.text-center').removeAttr('class').addClass('text-center col-3');
                }
                if (value_select.length == 1) {
                    $('#setup-print').removeClass('heigth-90px');
                    $('#show_signature').find('.text-center').removeAttr('class').addClass('text-center col-4');
                }
                if (value_select.length == 0) {
                    $('#show_signature').find('.text-center').removeAttr('class').addClass('text-center col-6');
                }
            });
            $('#select-setup-print').change(function (e) {
                var value_select = $('#select-setup-print').val();
                if (value_select.length == 1) {
                    $('#setup-print').removeClass('heigth-90px');
                }
                if (value_select.indexOf('0') != -1) {
                    $('#select-accountant').show();
                    option_print_accountant = 1;
                } else {
                    $('#select-accountant').hide();
                    option_print_accountant = 0;
                }
                if (value_select.indexOf('1') != -1) {
                    $('#select-cashier').show();
                    option_print_cashier = 1;
                } else {
                    $('#select-cashier').hide();
                    option_print_cashier = 0;
                }
                if (value_select.indexOf('2') != -1) {
                    $('#select-manage').show();
                    option_print_manage = 1;
                } else {
                    $('#select-manage').hide();
                    option_print_manage = 0;
                }
                if (value_select.indexOf('3') != -1) {
                    $('#select-garenal-director').show();
                    option_print_garenal_director = 1;
                } else {
                    $('#select-garenal-director').hide();
                    option_print_garenal_director = 0;
                }
                if ($('#select-setup-print').val().length == 2) {
                    $('#setup-print').addClass('heigth-90px');
                    $('#show_signature').find('.text-center').removeAttr('class').addClass('text-center col-3');
                }
                if ($('#select-setup-print').val().length == 1) {
                    $('#setup-print').removeClass('heigth-90px');
                    $('#show_signature').find('.text-center').removeAttr('class').addClass('text-center col-4');
                }
                if ($('#select-setup-print').val().length == 0) {
                    $('#show_signature').find('.text-center').removeAttr('class').addClass('text-center col-6');
                }
            })
            $('#select-accountant').hide();
            $('#select-cashier').hide();
            $('#select-manage').hide();
            $('#select-garenal-director').hide();
            payment_type_render();
            $('#reason-view').hide();
            var option_print = [];
            if (option_print_class == "0") {
                option_print.push('0');
            }
            if (option_print_session == "0") {
                option_print.push('1');
            }
            if (option_print_start == "0") {
                option_print.push('2');
            }
            if (option_print_end == "0") {
                option_print.push('3');
            }
            if (option_print_course == "0") {
                option_print.push('4');
            }
            if (option_print_invoice == "0") {
                option_print.push('5');
            }
            if (option_print_bill_item == "0") {
                option_print.push('6');
            }
            if (option_print_parent_info == "0") {
                option_print.push('7');
            }
            if (option_print_appointment == "0") {
                option_print.push('8');
            }
            if (option_print_promotion == "0") {
                option_print.push('9');
            }
            if (option_print_debit == "0") {
                option_print.push('10');
            }
            if (option_print_discount_contract == "0") {
                option_print.push('11');
            }
            if (option_print_receivables == "0") {
                option_print.push('12');
            }
            option_show();
        }

        initPrint();
        $('#select-setup-print').trigger('change');


        $('#select-option-print').change(function (e) {
            option_show();
        });

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        function set_cache_option_show() {

        }

        function option_show() {
            var list_option = $('#select-option-print').val();
            if (list_option.indexOf('0') != -1) {
                option_print_class = 0;
                $('.option_print_class').hide();
            } else {
                option_print_class = 1;
                $('.option_print_class').show();
            }
            if (list_option.indexOf('1') != -1) {
                option_print_session = 0;
                $('.option_print_lessons_number').hide();
            } else {
                option_print_session = 1;
                $('.option_print_lessons_number').show();
            }
            if (list_option.indexOf('2') != -1) {
                option_print_start = 0;
                $('.option_print_start_date').hide();
            } else {
                option_print_start = 1;
                $('.option_print_start_date').show();
            }
            if (list_option.indexOf('3') != -1) {
                option_print_end = 0;
                $('.option_print_end_date').hide();
            } else {
                option_print_end = 1;
                $('.option_print_end_date').show();
            }
            if (list_option.indexOf('4') != -1) {
                option_print_course = 0;
                $('.option_print_course_promotion').hide();
                $('.comma').hide();
            } else {
                option_print_course = 1;
                $('.option_print_course_promotion').show();
            }
            if (list_option.indexOf('5') != -1) {
                option_print_invoice = 0;
                $('.option_print_invoice_promotion').hide();
                $('.comma').hide();
            } else {
                option_print_invoice = 1;
                $('.option_print_invoice_promotion').show();
            }
            if (list_option.indexOf('6') != -1) {
                option_print_bill_item = 0;
                $('.option_print_bill_item').hide();
            } else {
                option_print_bill_item = 1;
                $('.option_print_bill_item').show();
            }
            if (list_option.indexOf('7') != -1) {
                option_print_parent_info = 0;
                $('.option_print_parent_info').hide();
            } else {
                option_print_parent_info = 1;
                $('.option_print_parent_info').show();
            }
            if (list_option.indexOf('8') != -1) {
                option_print_appointment = 0;
                $('.option_print_appointment').hide();
            } else {
                option_print_appointment = 1;
                $('.option_print_appointment').show();
            }
            if (list_option.indexOf('9') != -1) {
                option_print_promotion = 0;
                $('.option_print_promotion').hide();
            } else {
                option_print_promotion = 1;
                $('.option_print_promotion').show();
            }
            if (list_option.indexOf('10') != -1) {
                option_print_debit = 0;
                $('.option_print_debit').hide();
            } else {
                option_print_debit = 1;
                $('.option_print_debit').show();
            }
            if (list_option.indexOf('11') != -1) {
                option_print_debit = 0;
                $('.option_print_discount_contract').hide();
            } else {
                option_print_debit = 1;
                $('.option_print_discount_contract').show();
            }
            if (list_option.indexOf('12') != -1) {
                option_print_receivables = 0;
                $('.option_print_receivables').hide();
            } else {
                option_print_receivables = 1;
                $('.option_print_receivables').show();
            }

            if ((list_option.indexOf('4') == -1) && list_option.indexOf('5') == -1) {
                $('.comma').show();
            }
            if ((list_option.indexOf('4') != -1) && list_option.indexOf('5') != -1) {
                $('.dot').hide();
            } else {
                $('.dot').show();
            }


        }

        function render_language() {
            var valueSelected = $('.change-language-print option:selected').val();
            if (valueSelected == 0) { // vi
                $.each(tieng_viet, function (k, w) {
                    var name_class = '.language_' + k;
                    $(name_class).text(w);
                });
                $('.text-more').show();
                $(".money_word").html(DocSo3ChuSo(1100000.00));
                payment_type_render(0);
            } else { //en
                $.each(english_print, function (k, w) {
                    var name_class = '.language_' + k;
                    $(name_class).text(w);
                })
                $('.text-more').hide();
                $(".money_word").html(numbers_to_words(1100000));
                payment_type_render(1);
            }
        }

        function print() {
            set_cache_option_show();
            $('#content').printThis({
                debug: false, // show the iframe for debugging
                importCSS: true, // import parent page css
                importStyle: true, // import style tags
                printContainer: true, // print outer container/$.selector
                // loadCSS: ["assets/vendors/base/vendors.bundle.css", ""], // path to additional css file - use an array [] for multiple
                pageTitle: "", // add title to print page
                removeInline: false, // remove inline styles from print elements
                removeInlineSelector: "*", // custom selectors to filter inline styles. removeInline must be true
                printDelay: 333, // variable print delay
                header: null, // prefix to html
                footer: null, // postfix to html
                base: false, // preserve the BASE tag or accept a string for the URL
                formValues: true, // preserve input/form values
                canvas: false, // copy canvas content
                removeScripts: false, // remove script tags from print content
                copyTagClasses: false, // copy classes from the html & body tag
                beforePrintEvent: null, // function for printEvent in iframe
                beforePrint: null, // function called before iframe is filled
                afterPrint: null // function called before iframe is removed
            });
        }

        $('input[name=layout]').on('change', function () {
            $('#page').attr('size', $(this).attr('data-size')).attr('layout', $(this).attr('data-layout'));

            if ($('#a4-split').prop('checked')) {
                var html = '<hr class="height_hr"><div id="content-split">' + $('#content').find('.content_page1').html() + '</div>';
                $('#content').find('.content_page1:first').addClass('height_split');
                $('#content').append(html);
            } else {
                $('#content-split').remove();
                $('hr[class=height_hr]').remove();
            }
        });

        function toggleUser() {
            console.log($('#show-user').prop('checked'));
            if ($('#show-user').prop('checked')) {
                $('#creator').css('display', 'block');
            } else {
                $('#creator').css('display', 'none');
            }
        }

        function showReasonModal() {
            $('#modal-reason').modal('show');
        }

        function applyReason() {
            let content = $('#reason-content').val();
            if (content != '') {
                $('.text_reason').text(content);
                $('#reason-view').show();
                /* $('#reason-view').html("<strong><span class='language_reason_for_deduction'></span>:</strong> " + content); */
            } else {
                $('#reason-view').hide();
            }
            $('#modal-reason').modal('hide');
        }

        function payment_type_render(language_id) {
            var string_payment_type = '[3]';
            var length_payment = JSON.parse(string_payment_type).length;
            var arr_paeyment_vi = '{"1":"Thanh to\u00e1n b\u1eb3ng v\u00ed CO","2":"Thanh to\u00e1n b\u1eb1ng ti\u1ec1n m\u1eb7t","3":"Thanh to\u00e1n b\u1eb1ng chuy\u1ec3n kho\u1ea3n","4":"Thanh to\u00e1n b\u1eb1ng qu\u1eb9t th\u1ebb","5":"Thanh to\u00e0n b\u1eb1ng vimass","6":"Thanh to\u00e1n b\u1eb1ng VNPAY","7":"Thanh to\u00e1n b\u1eb1ng 9PAY","8":"Thanh to\u00e1n b\u1eb1ng ONEPAY"}';
            var arr_paeyment_en = '{"1":"CO Wallet","2":"Cash","3":"Bank Tranfer","4":"Credit Card","5":"Vimass","6":"VNPAY","7":"9PAY","8":"OnePAY"}';
            string_payment_type = String(string_payment_type);
            var text_payment = '';
            var check = 1;
            if (language_id == 1) { // en
                $.each(JSON.parse(arr_paeyment_en), function (k, v) {
                    if (string_payment_type.indexOf(k) !== -1) {
                        if (check !== length_payment) {
                            text_payment += v + ' ,';
                        } else {
                            text_payment += v;
                        }
                        check += 1;
                    }
                })
            } else { // vi
                $.each(JSON.parse(arr_paeyment_vi), function (k, v) {
                    if (string_payment_type.indexOf(k) !== -1) {
                        if (check !== length_payment) {
                            text_payment += v + ' ,';
                        } else {
                            text_payment += v;
                        }
                        check += 1;
                    }
                })
            }
            $('#payment_method').text(text_payment);

        }
