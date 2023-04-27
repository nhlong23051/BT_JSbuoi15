// bt1
tinhDiem = document.getElementById('tinhDiem').onclick = function () {
    var diem1 = +document.getElementById('diem1').value;
    var diem2 = +document.getElementById('diem2').value;
    var diem3 = +document.getElementById('diem3').value;
    var khuVuc = +document.getElementById('khuVuc').value;
    var doiTuong = +document.getElementById('doiTuong').value;
    tongDiem = "";
    tongDiem = diem1 + diem2 + diem3 + khuVuc + doiTuong;
    if (tongDiem > 16) {
        var ketQua1 = document.getElementById('ketQua1');
        ketQua1.innerHTML = 'Kết Quả: ' + tongDiem;
        ketQua1.style.background = '#2ebb2eb5';
        ketQua1.style.color = 'white';
        ketQua1.style.textAlign = 'center';
        ketQua1.style.fontSize = '20px';
        ketQua1.style.transition = 'all 0.5s';
    } else {
        var ketQua1 = document.getElementById('ketQua1');
        ketQua1.innerHTML = 'Kết Quả: ' + tongDiem;
        ketQua1.style.background = '#ff0000ab';
        ketQua1.style.color = 'white';
        ketQua1.style.textAlign = 'center';
        ketQua1.style.fontSize = '20px';
        ketQua1.style.transition = 'all 0.5s';
    }
}

// bt2
tinhTienDien = document.getElementById('tinhTienDien').onclick = function () {
    var hoVaTen = document.getElementById('hoVaTen').value;
    var kWDaSuDung = +document.getElementById('kWDaSuDung').value;
    giaiDoan1 = 500; //50kw đầu
    giaiDoan2 = 650; //50kw kế
    giaiDoan3 = 850; //100kw kế
    giaiDoan4 = 1100; //150kw kế
    giaiDoan5 = 1300; // Còn lại
    tongTienDien = "";
    if (kWDaSuDung <= 50) {
        tongTienDien = kWDaSuDung * giaiDoan1;
    } else if (kWDaSuDung <= 100) {
        tongTienDien = 50 * giaiDoan1 + (kWDaSuDung - 50) * giaiDoan2;
    } else if (kWDaSuDung <= 200) {
        tongtongTienDien = 50 * giaiDoan1 + 50 * giaiDoan2 + (kWDaSuDung - 100) * giaiDoan3;
    } else if (kWDaSuDung < 350) {
        tongTienDien = 50 * giaiDoan1 + 50 * giaiDoan2 + 100 * giaiDoan3 + (kWDaSuDung - 200) * giaiDoan4;
    } else {
        tongTienDien = 50 * giaiDoan1 + 50 * giaiDoan2 + 100 * giaiDoan3 + 150 * giaiDoan4 + (kWDaSuDung - 350) * giaiDoan5;
    }
    var result = '';
    result += '<p>Ông/Bà: ' + hoVaTen + '</p>';
    result += '<p>Tổng tiền điện: ' + tongTienDien + ' VND </p>';
    document.getElementById('ketQua2').innerHTML = result;
}

//bt3
document.getElementById('kiemTra').onclick = function () {
    var hoVaTen2 = document.getElementById('hoVaTen2').value;
    var tongThuNhap = +document.getElementById('tongThuNhap').value;
    var nguoiPhuThuoc = +document.getElementById('nguoiPhuThuoc').value;
    var thuNhapChiuThue = tongThuNhap - (nguoiPhuThuoc * 1.6) - 4;
    mucThueCoBan = 5;
    thuePhaiDong = '';
    if (thuNhapChiuThue <= 60) {
        mucThue = mucThueCoBan * 1;
        thuePhaiDong = thuNhapChiuThue * 0.05;

    } else if (thuNhapChiuThue <= 120) {
        mucThue = mucThueCoBan * 2;
        thuePhaiDong = thuNhapChiuThue * 0.1;

    } else if (thuNhapChiuThue <= 210) {
        mucThue = mucThueCoBan * 3;
        thuePhaiDong = thuNhapChiuThue * 0.15;

    } else if (thuNhapChiuThue <= 384) {
        mucThue = mucThueCoBan * 4;
        thuePhaiDong = thuNhapChiuThue * 0.2;

    } else if (thuNhapChiuThue <= 624) {
        mucThue = mucThueCoBan * 5;
        thuePhaiDong = thuNhapChiuThue * 0.25;

    } else if (thuNhapChiuThue <= 960) {
        mucThue = mucThueCoBan * 6;
        thuePhaiDong = thuNhapChiuThue * 0.3;

    } else {
        mucThue = mucThueCoBan * 7;
        thuePhaiDong = thuNhapChiuThue * 0.35;
    }
    thuePhaiDong = thuePhaiDong.toFixed(3);
    tongThuNhapSauThue = tongThuNhap - thuePhaiDong;
    var result2 = '';
    result2 += '<p>Họ và Tên: ' + hoVaTen2 + '</p>'
    result2 += '<p>Thuế suât(%): ' + mucThue + '%</p>'
    result2 += '<p>Thuế phải đóng: ' + thuePhaiDong + '</p>'
    result2 += '<p>Tổng thu nhập sau thuế: ' + tongThuNhapSauThue + '</p>'
    document.getElementById('ketQua3').innerHTML = result2;
}

// bt4
const phiHoaDonND = 4.5;
const phiCoBanND = 20.5;
const giaKenhCaoCapND = 7.5;

const phiHoaDonDN = 15;
const phiCoBanDN = 75; //cho 10 kết nối đầu
const giaKenhCaoCapDN = 50;
var nhapSoKetNoi = 0;
var loaiKH = '';
var layLoaiKhachHang = '';
var phiHoaDon = 0;
var phiDVCB = 0;
var phiKenhCaoCap = 0;
var tongTienCap = 0;

function getEle(id) {
    return document.getElementById(id);
}

function onSoKetNoi() {
    getEle('soKetNoi').style.display = 'block';
}
function offSoKetNoi() {
    getEle('soKetNoi').style.display = 'none';
}

function loaiKhachHang() {
    var nhaDan = getEle('nhaDan');
    var doanhNghiep = getEle('doanhNghiep');

    if (nhaDan.checked) {
        loaiKH = 'nhaDan';
    } else if (doanhNghiep.checked) {
        loaiKH = 'doanhNghiep';
    } else {
        alert('Vui lòng chọn dịch vụ')
    }
    return loaiKH
}

function tinhTongTienCap(phiHoaDon, phiDVCB, nhapSoKetNoi, soKenhCaoCap, giaKenhCaoCap, loaiKH) {
    if (loaiKH === 'doanhNghiep') {
        if (nhapSoKetNoi > 10) {
            phiDVCB = (nhapSoKetNoi - 10) * 5 + phiDVCB;
            phiKenhCaoCap = soKenhCaoCap * giaKenhCaoCap;
            tongTienCap = phiHoaDon + phiDVCB + phiKenhCaoCap;
        } else if (nhapSoKetNoi > 0 && nhapSoKetNoi <= 10) {
            phiKenhCaoCap = soKenhCaoCap * giaKenhCaoCap;
            tongTienCap = phiHoaDon + phiDVCB + phiKenhCaoCap;
        } else{
            alert('Vui lòng nhập số kết nối')
        }

    } else if (loaiKH === 'nhaDan') {
        phiKenhCaoCap = soKenhCaoCap * giaKenhCaoCap;
        tongTienCap = phiHoaDon + phiDVCB + phiKenhCaoCap;
    }

    return tongTienCap;
}
getEle('ketNoi').onclick = function () {
    var maKhachHang = +getEle('maKhachHang').value;
    var soKenhCaoCap = +getEle('soKenhCaoCap').value;
    var nhapSoKetNoi = +getEle('nhapSoKetNoi').value;
    var loaiKH = loaiKhachHang();
    switch (loaiKH) {
        case 'nhaDan':
            tongTienCap = tinhTongTienCap(phiHoaDonND, phiCoBanND, nhapSoKetNoi, soKenhCaoCap, giaKenhCaoCapND, loaiKH)
            break;
        case 'doanhNghiep':
            tongTienCap = tinhTongTienCap(phiHoaDonDN, phiCoBanDN, nhapSoKetNoi, soKenhCaoCap, giaKenhCaoCapDN, loaiKH)
            break;
    }
    var result4 = '';
    result4 += '<p>Mã khách hàng là: ' + maKhachHang + '</p>';
    result4 += '<p>Tổng giá cước là: ' + tongTienCap + '$ </p>';
    // getEle('ketQua4').innerHTML = 'Mã khách hàng là: ' + maKhachHang;
    getEle('ketQua4').innerHTML = result4;
}



