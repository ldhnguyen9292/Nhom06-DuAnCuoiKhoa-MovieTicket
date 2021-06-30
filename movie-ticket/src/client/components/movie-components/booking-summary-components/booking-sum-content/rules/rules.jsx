import React from "react";
import { useStyles } from "./rules-styles";
import {Paper} from '@material-ui/core'

function Rules() {
    const classes = useStyles();
  return (
    <Paper className={classes.group}>
      <div>
        <h1>THỎA THUẬN SỬ DỤNG</h1>
        <p>
          Chào mừng bạn đã đến với website của Movie Ticket. Movie Ticket cung
          cấp các sản phẩm và dịch vụ dựa trên những điều kiện dưới đây.
        </p>
        <p>
          <strong>
            Khi bạn sử dụng sản phẩm và dịch vụ do Movie Ticket cung cấp, bạn
            đồng ý với những điều khoản sử dụng sau. Vui lòng đọc kỹ các điều
            khoản dưới đây.
          </strong>
        </p>
        <h2 id="main-sec-1">I. CHÍNH SÁCH VÀ QUY ĐỊNH CHUNG</h2>
        <div className="m-section">
          <h3 id="m1-sub-sec-1">1. Quyền Truy Cập</h3>
          <div className="section">
            <p>
              Với điều kiện bạn tuân theo các <i>Thỏa thuận sử dụng</i> và các
              khoản thanh toán cho các dịch vụ bổ sung, bạn có quyền truy cập và
              sử dụng các dịch vụ của Movie Ticket. Quyền truy cập này không bao
              gồm bất kỳ giao dịch mua đi bán lại hoặc sử dụng vì mục đích
              thương mại các dịch vụ và nội dung của Movie Ticket; các thông tin
              mô tả, đánh giá, bình luận; bất kỳ sự sao chép hoặc download thông
              tin để phục vụ lợi ích của bên thứ ba; hoặc việc sử dụng các công
              cụ khai thác dữ liệu. Movie Ticket có quyền khiếu nại tất cả các
              hành động sao chép, sử dụng với mục đích thương mại mà không được
              sự đồng ý từ Movie Ticket. Bạn có thể bị tước quyền truy cập vào
              Movie Ticket nếu bạn không tuân theo các <i>Thỏa thuận sử dụng</i>{" "}
              này.
            </p>
          </div>
          <h3 id="m1-sub-sec-2">2. Tạo Tài Khoản Và Chế Độ Bảo Mật</h3>
          <div className="section">
            <p>Khi đăng ký tham gia Movie Ticket, bạn vui lòng:</p>
            <ul>
              <li>
                Cung cấp những thông tin chính xác, đầy đủ theo bản đăng ký mẫu
                của Movie Ticket.
              </li>
              <li>
                Duy trì và cập nhật những thông tin, thay đổi mới nhất một cách
                chính xác và đầy đủ.
              </li>
            </ul>
            <p>
              Sự không chính xác của những thông tin bạn cung cấp có thể làm bạn
              không tận dụng được hết những sản phẩm và dịch vụ Movie Ticket
              cung cấp. Trong một số trường hợp đặc biệt, Movie Ticket có quyền
              từ chối cung cấp dịch vụ cho bạn và đình chỉ tài khoản của bạn vào
              thời điểm hiện tại và trong tương lai nếu những thông tin mà bạn
              cung cấp không chính xác hoặc Movie Ticket có lý do nghi ngờ tính
              trung thực của những thông tin mà bạn cung cấp.
            </p>
            <p>
              Chúng tôi sẽ không sử dụng những thông tin cá nhân của bạn nếu
              chưa được sự cho phép của bạn. Bạn có thể yên tâm rằng khi bạn
              cung cấp thông tin cho Movie Ticket, thông tin của bạn luôn được
              bảo mật tuyệt đối. Thông tin của bạn chỉ được sử dụng với mục đích
              gửi thông báo cho bạn về phim ảnh, các chương trình khuyến mãi…
              Movie Ticket cam kết sẽ không tiết lộ thông tin của bạn cho một
              bên thứ ba mà không có sự đồng ý, ngoại trừ yêu cầu cung cấp bởi
              pháp luật.
            </p>
            <p>
              Quyền truy cập và sử dụng tài khoản chỉ dành riêng cho cá nhân có
              thẩm quyền. Mọi hành vi cố ý truy cập trái phép đều có thể bị truy
              tố.
            </p>
          </div>
          <h3 id="m1-sub-sec-3">3. Tài Khoản Của Bạn</h3>
          <div className="section">
            <p>
              Nếu bạn sử dụng dịch vụ của Movie Ticket, bạn có trách nhiệm duy
              trì sự bảo mật tài khoản và mật khẩu của bạn, cũng như hạn chế sự
              truy cập vào máy tính cá nhân. Bạn cũng đồng ý chịu trách nhiệm
              cho tất cả các hoạt động phát sinh dưới tài khoản và mật khẩu của
              bạn. Bạn có trách nhiệm đảm bảo các bộ phim, chương trình, hoặc
              sản phẩm bạn mua từ Movie Ticket phù hợp với độ tuổi của bạn.
              Movie Ticket có quyền đơn phương từ chối cung cấp dịch vụ, đóng
              tài khoản cá nhân, xóa bỏ hoặc thay đổi nội dung, hoặc hủy đơn
              hàng của bạn.
            </p>
          </div>
          <h3 id="m1-sub-sec-4">
            4. Bình Luận, Đánh Giá, Và Những Nội Dung Khác
          </h3>
          <div className="section">
            <p>
              Khách hàng có thể đăng tải các bình luận, đánh giá và những nội
              dung khác; và gửi các gợi ý, ý tưởng, bình luận, câu hỏi, hoặc
              những loại thông tin khác nếu như những thông tin này không chứa
              các nội dung bất hợp pháp, đồi trụy, đe dọa, phỉ báng, xâm phạm
              quyền riêng tư cá nhân, xâm phạm quyền sở hữu trí tuệ, hoặc những
              nội dung gây hại cho bên thứ ba, hoặc những nội dung không phù hợp
              với thuần phong mỹ tục, và không chứa virut, nội dung vận động
              chính trị, nội dung mang tính thương mại, hoặc bất kỳ hình thức
              thư rác nào.
            </p>
            <p>
              Khi bạn đăng tải thông tin hoặc gửi các loại tài liệu cho Movie
              Ticket, thì Movie Ticket có toàn quyền sử dụng, sao chép, thay
              đổi, biên dịch, công bố, hiển thị nội dung đó cho tất cả mọi người
              dưới bất kỳ hình thức nào trừ trường hợp có thỏa thuận khác giữa
              Movie Ticket và người dùng. Đồng thời, bạn cũng cho phép Movie
              Ticket có quyền được sử dụng tên đi kèm với nội dung mà bạn gửi
              hoặc đăng tải. Bạn đảm bảo rằng bạn sở hữu và có toàn quyền sử
              dụng nội dung mà bạn đăng tải; rằng nội dung được đăng tải là
              chính xác; rằng việc sử dụng các nội dung bạn cung cấp không vi
              phạm Thỏa thuận sử dụng này và không gây hại cho bên thứ ba nào;
              và rằng bạn sẽ bồi thường cho Movie Ticket nếu như có bất kỳ khiếu
              kiện nào phát sinh từ những nội dung mà bạn cung cấp.
            </p>
            <p>
              Movie Ticket không chịu trách nhiệm sàng lọc, chỉnh sửa hoặc giám
              sát nội dung được người sử dụng đăng tải lên website và các sản
              phẩm liên quan, cũng như không thể đảm bảo tính chính xác của
              những ý kiến, bình luận này. Nếu nhận được thông tin về những vi
              phạm, gây tổn hại hoặc bất hợp pháp, Movie Ticket có quyền điều
              tra những cáo buộc trên để xác minh, và có quyền quyết định chấm
              dứt cung cấp dịch vụ đối với thành viên vi phạm những điều khoản
              sử dụng.
            </p>
            <p>
              Mặc dù đã có những quy định nêu trên, nhưng Movie Ticket cũng như
              những cá thể, tập thể liên quan không thể bảo đảm có thể chỉnh sửa
              hoặc xoá bỏ lập tức những nội dung vi phạm. Movie Ticket có quyền
              nhưng không phải là nghĩa vụ kiểm soát và thay đổi hoặc xóa bỏ bất
              kỳ nội dung nào. Cũng như Movie Ticket không phải chịu trách nhiệm
              pháp lý đối với những nội dung do người dùng hoặc bất kỳ bên thứ 3
              nào đăng tải trên Movie Ticket. Đồng thời, Khách hàng cũng có
              trách nhiệm cho mối liên hệ giữa bạn và những người dùng khác.
              Movie Ticket có quyền, nhưng không có nghĩa vụ theo dõi các tranh
              chấp giữa các người dùng với nhau.
            </p>
          </div>
          <h3 id="m1-sub-sec-5">5. Nội Dung</h3>
          <div className="section">
            <p>
              Những thông tin được đăng tải trên Movie Ticket được cung cấp cho
              bạn và không kèm theo bất kỳ cam kết nào, Movie Ticket không bảo
              đảm hoặc chịu trách nhiệm về độ chính xác, độ xác thực, độ tin cậy
              của việc sử dụng hoặc kết quả của việc sử dụng những dữ liệu này.
              Movie Ticket luôn cố gắng cập nhật toàn bộ thông tin một cách kịp
              thời nhưng chúng tôi không bảo đảm rằng những nội dung hiện tại là
              mới nhất hoặc chính xác nhất.
            </p>
            <p>
              Tất cả thông tin, bao gồm nội dung, phần mềm, dữ liệu… được đăng
              tải lên website và các sản phẩm liên quan củ Movie Ticket đều
              thuộc bản quyền của Movie Ticket, bạn có thể tải về và sử dụng.
              Nhưng những nội dung đó không thuộc quyền sở hữu của bạn, nên
              chúng tôi nghiêm cấm mua bán, phân phối, bẻ khoá, sao chép, sửa
              đổi hay sử dụng bất kỳ nội dung nào mà không có sự đồng ý của
              Movie Ticket.
            </p>
            <p>
              Người dùng có thể sử dụng những thông tin thuộc quyền sở hữu của
              Movie Ticket để chia sẻ trên mạng, với điều kiện phải trích rõ
              nguồn và chủ sở hữu thông tin.
            </p>
          </div>
          <h3 id="m1-sub-sec-6">6. Thông Tin Phim, Chương Trình, Sự Kiện</h3>
          <div className="section">
            <p>
              Movie Ticket luôn cố gắng cung cấp cho bạn những thông tin chính
              xác và đa chiều về các bộ phim hoặc các chương trình, hoặc sự kiện
              có hệ thống phân phối vé thông qua Movie Ticket. Nếu vé bạn nhận
              được không tương ứng với chỗ ngồi bạn chọn khi đặt, bạn vui lòng
              liên hệ với nhân viên chăm sóc khách hàng của Movie Ticket để có
              thêm chi tiết theo email{" "}
              <a href="mailto:support Movie Ticket.vn">
                support Movie Ticket.vn
              </a>
              , hoặc qua số hotline 1900&nbsp;545&nbsp;436.
            </p>
            <p>
              Tuy nhiên, Movie Ticket không chịu bất kỳ trách nhiệm nào liên
              quan đến mức độ yêu thích của bạn đối với bộ phim, chương trình,
              hoặc sự kiện.
            </p>
          </div>
          <h3 id="m1-sub-sec-7">7. Giá Cả</h3>
          <div className="section">
            <p>
              Trừ phi có ghi chú khác bằng văn bản, mức giá được hiển thị cho
              mỗi loại sản phẩm trên Movie Ticket là mức giá bán lẻ cuối cùng
              của sản phẩm dựa trên thông tin từ nhà cung cấp dịch vụ.
            </p>
            <p>
              Chúng tôi không cam kết mức giá của chỗ ngồi bạn đặt sẽ không thay
              đổi cho đến khi bạn đặt vé. Tuy nhiên, đối với những chỗ ngồi bị
              sai giá, nếu như mức giá của chỗ ngồi trên thực tế cao hơn mức giá
              hiển thị trên Movie Ticket, thì chúng tôi sẽ liên lạc trực tiếp
              với bạn về vấn đề này.
            </p>
          </div>
          <h3 id="m1-sub-sec-8">8. Tình Trạng Chỗ Ngồi</h3>
          <div className="section">
            <p>
              Movie Ticket không cam kết chỗ ngồi bạn đang chọn chưa được khách
              hàng khác đặt cho đến khi bạn bắt đầu thanh toán cho đơn hàng của
              mình. Tuy nhiên, nếu bạn không nhận được đúng số ghế mà bạn đã đặt
              vì bất kỳ lý do gì, bạn vui lòng liên lạc với chúng tôi theo email{" "}
              <a href="mailto:support Movie Ticket.vn">
                support Movie Ticket.vn
              </a>
              , hoặc qua số hotline 1900&nbsp;545&nbsp;436.
            </p>
          </div>
          <h3 id="m1-sub-sec-9">9. Các Website Liên Kết</h3>
          <div className="section">
            <p>
              Ngoại trừ nội dung trên website và các sản phẩm liên quan của
              Movie Ticket, chúng tôi không trực tiếp hay gián tiếp quản lý
              những website liên kết. Movie Ticket không hợp tác, tài trợ, xác
              thực hay sát nhập với những website đó, trừ khi sự hợp tác đó được
              công bố rõ ràng. Khi truy cập vào Movie Ticket, chúng tôi hy vọng
              bạn có thể hiểu rằng Movie Ticket không kiểm soát, quản lý những
              trang liên kết và không chịu trách nhiệm về nội dung của bất kỳ
              website liên kết nào.
            </p>
          </div>
          <h3 id="m1-sub-sec-10">10. Bản Quyền Sở Hữu</h3>
          <div className="section">
            <p>
              Tất cả nội dung được hiển thị trên website và các sản phẩm liên
              quan Movie Ticket dưới bất kỳ hình thức nào như ký tự, hình ảnh,
              logo, video clip… là tài sản của Movie Ticket hoặc các đối tác
              cung cấp nội dung của Movie Ticket, được bảo vệ bởi luật pháp Việt
              Nam và các quy định bản quyền quốc tế. Sự biên soạn và hiển thị
              các nội dung này thông qua Movie Ticket là tài sản riêng của Movie
              Ticket.
            </p>
            <p>
              Movie Ticket là chủ bản quyền của website và các sản phẩm liên
              quan. Movie Ticket có quyền chỉnh sửa, thay đổi, sắp xếp lại nội
              dung website và các sản phẩm liên quan. Việc chỉnh sửa, thay đổi,
              sắp xếp lại hoặc tái sử dụng những nội dung này mà không có sự
              đồng ý của Movie Ticket đều là vi phạm quyền lợi hợp pháp của
              Movie Ticket.
            </p>
            <p>
              Movie Ticket luôn tôn trọng sở hữu trí tuệ của người khác, và
              chúng tôi yêu cầu người dùng của chúng tôi cũng làm như vậy. Chúng
              tôi luôn cố gắng đảm bảo những dữ liệu trên website và các sản
              phẩm liên quan đều là hợp pháp, nhưng chúng tôi không chắc chắn có
              thể kiểm soát tất cả thông tin trên website và các sản phẩm liên
              quan. Khi phát hiện được bất kỳ hành vi vi phạm bản quyền nào trên
              website và các sản phẩm liên quan, Ban quản trị sẽ xoá nội dung đó
              khỏi website một cách nhanh nhất có thể.
            </p>
          </div>
          <h3 id="m1-sub-sec-11">11. Thỏa Thuận Sử Dụng Voucher Lotte</h3>
          <div className="section">
            <p>
              Kể từ 1/6/2019 Movie Ticket chính thức cung cấp Voucher Lotte trên
              hệ thống Movie Ticket. Voucher Lotte do Movie Ticket cung cấp có
              các điều khoản sử dụng sau đây:
            </p>
            <ol style={{ listStyle: "decimal", paddingInlineStart: 25 }}>
              <li>
                Chỉ được áp dụng 01 lần và theo đúng quy định của loại voucher
                đã chọn
              </li>
              <li>
                Voucher Lotte KHÔNG ÁP DỤNG cho{" "}
                <span style={{ color: "red" }}>
                  Phòng Chiếu số 7 – rạp Lotte Cinema Gò Vấp
                </span>
              </li>
              <li>
                Khi đổi voucher thành vé, vui lòng chọn suất chiếu và vị trí
                ngồi
              </li>
              <li>Áp dụng cho cụm rạp Lotte trên toàn quốc</li>
            </ol>
            <p>
              Nếu có thắc mắc về Voucher Lotte bạn vui lòng liên hệ với chúng
              tôi qua hotline: 1900&nbsp;545&nbsp;436.
            </p>
          </div>
          <h3 id="m1-sub-sec-12">12. Trách Nhiệm Pháp Lý</h3>
          <div className="section">
            <p>
              Trừ phi có ghi chú khác bằng văn bản, tất cả dịch vụ, thông tin,
              nội dung, công cụ, sản phẩm (bao gồm cả phần mềm) của Movie Ticket
              hoặc được hiển thị trên website và các sản phẩm liên quan của
              Movie Ticket được cung cấp dựa trên thỏa thuận sử dụng và các quy
              định khác của Movie Ticket và các nhà cung cấp.
            </p>
            <p>
              Bạn đồng ý rằng việc sử dụng các dịch vụ, thông tin, nội dung,
              công cụ và sản phẩm của Movie Ticket hoặc được hiển thị trên
              website và các sản phẩm liên quan của Movie Ticket thuộc phạm trù
              rủi ro riêng của bạn. Movie Ticket không bảo đảm cho bất kỳ dịch
              vụ, thông tin, nội dung, công cụ của Movie Ticket hoặc được hiển
              thị trên website và các sản phẩm liên quan của Movie Ticket. Movie
              Ticket server và các thông điệp truyền thông được gửi đi từ Movie
              Ticket không chứa virut hay bất kỳ tác nhân gây hại nào cho bạn.
              Trừ phi có ghi chú khác bằng văn bản, Movie Ticket từ chối trách
              nhiệm pháp lý cho bất kỳ thiệt hại nào phát sinh từ việc sử dụng
              các dịch vụ, thông tin, nội dung, công cụ và sản phẩm của Movie
              Ticket hoặc được hiển thị trên website và các sản phẩm liên quan
              của Movie Ticket.
            </p>
            <p>
              Nếu các bộ luật, và quy định pháp luật được ban hành bởi Nhà Nước
              có bất kỳ nội dung nào mâu thuẫn với bất kỳ quy định về từ chối
              bảo đảm và trách nhiệm pháp lý, thì những điểm quy định đó không
              có hiệu lực áp dụng đối với bạn. Điều này đồng nghĩa với việc bạn
              có quyền lợi bổ sung.
            </p>
          </div>
          <h3 id="m1-sub-sec-13">13. Sự Cố Phát Sinh</h3>
          <div className="section">
            <p>
              Khi đã sử dụng dịch vụ của Movie Ticket, bạn đã chấp nhận một số
              sự cố có thể phát sinh trong quá trình truy cập, và đồng ý rằng
              Movie Ticket và các đối tác liên quan sẽ không chịu trách nhiệm
              pháp lý về những thất thoát, thiệt hại xảy ra một cách trực tiếp
              hay gián tiếp trong khi truy cập vào website và các sản phẩm liên
              quan, khi tải dữ liệu, không loại trừ những tổn hại do virus,
              những tác động ảnh hưởng đến hệ thống máy tính, đường dây điện
              thoại, huỷ hoại các chương trình phần cứng, phần mềm, các trở ngại
              của đường truyền máy vi tính hoặc kết nối mạng.
            </p>
          </div>
          <h3 id="m1-sub-sec-14">14. Dừng Sử Dụng Dịch Vụ</h3>
          <div className="section">
            <p>
              Bạn có thể dừng việc sử dụng tài khoản của bạn bất cứ khi nào bằng
              cách thông báo cho Ban quản trị của Movie Ticket. Bạn sẽ nhận được
              e-mail xác nhận và tài khoản của bạn sẽ ngưng hoạt động trong vòng
              2 ngày làm việc. Bạn sẽ chịu trách nhiệm cho tất cả các chi phí
              phát sinh (nếu có) cho đến khi tài khoản ngưng hoạt động.
            </p>
          </div>
          <h3 id="m1-sub-sec-15">15. Ngưng Cung Cấp Dịch Vụ</h3>
          <div className="section">
            <p>
              Movie Ticket có quyền ngưng cung cấp dịch vụ cho người dùng nếu vi
              phạm những điều sau đây:
            </p>
            <ul>
              <li>
                Thông tin bạn cung cấp không chính xác, không đầy đủ, không
                trung thực, hoặc Movie Ticket.vn có căn cứ để nghi ngờ độ chính
                xác của thông tin.
              </li>
              <li>
                Đăng tải lên website và các sản phẩm liên quan những nội dung
                không phù hợp như những nội dung có tính chất khiêu dâm, đồi
                truỵ, phỉ báng, thô tục, gây hiểu lầm, hoặc phạm pháp.
              </li>
              <li>
                Quấy rối, đe doạ hoặc phân biệt một cá nhân hoặc một tập thể vì
                lý do giới tính, tôn giáo, khuynh hướng tình dục, chủng tộc, dân
                tộc, tuổi tác hoặc khuyết tật.
              </li>
              <li>
                "Spam", quảng cáo trái phép hoặc bất kỳ hình thức xổ số, bài bạc
                nào.
              </li>
              <li>Sử dụng tài khoản cá nhân với mục đích thương mại.</li>
              <li>Vi phạm những điều khoản khác của Movie Ticket.</li>
            </ul>
            <p>
              Movie Ticket không chịu trách nhiệm với những nội dung do thành
              viên đăng tải và sẽ cung cấp những nội dung này cho các cơ quan có
              thẩm quyền trong trường hợp cần thiết.
            </p>
          </div>
          <h3 id="m1-sub-sec-16">16. Quyền Lợi Thành Viên</h3>
          <div className="section">
            <ul>
              <li>CÁCH THỨC ĐĂNG KÝ TÀI KHOẢN THÀNH VIÊN</li>
              <ul style={{ listStyleType: "circle", paddingInlineStart: 25 }}>
                <li>
                  Thành viên đăng nhập vào hệ thống Movie Ticket bằng tài khoản
                  Facebook, Gmail hoặc Zalo cá nhân. Lưu ý: Tổng chi tiêu và
                  Movie Ticket được ghi nhận theo mỗi tài khoản riêng biệt sau
                  khi khách hàng thực hiện đăng nhập. Không thể liên kết nhiều
                  tài khoản hoặc trao đổi Chi tiêu và Movie Ticket giữa các tài
                  khoản.
                </li>
                <li>
                  Tài khoản có thể được sử dụng để mua vé và tích luỹ điểm ngay
                  sau khi đăng nhập.
                </li>
              </ul>
              <li>CÁC CẤP BẬC THÀNH VIÊN</li>
              <ul style={{ listStyleType: "circle", paddingInlineStart: 25 }}>
                <li>
                  Movie Ticket sẽ dựa trên mức chi tiêu của thành viên trong năm
                  2019 để xét cấp bậc trong năm 2020.
                </li>
                <img
                  src="/app/assets/img/member/chitieu.jpg"
                  alt="Chi Tieu"
                  style={{ marginLeft: "-25px" }}
                />
                <li>Tích Luỹ Điểm Thưởng</li>
                <ul style={{ listStyleType: "square", paddingInlineStart: 20 }}>
                  <li>
                    Điểm thưởng của Movie Ticket được tính bằng đơn vị Movie
                    Ticket. Được dùng để đổi vé, bắp nước và quà tặng từ Movie
                    Ticket Shop.
                  </li>
                  <li>Ví dụ: Đối với giao dịch 100,000đ</li>
                  <ul
                    style={{ listStyleType: "square", paddingInlineStart: 20 }}
                  >
                    <li>
                      Hạng STARTER - tích luỹ 5% tương đương 100 x 5% = 5 Movie
                      Ticket
                    </li>
                    <li>
                      Hạng MOVIE LOVER - tích luỹ 7% tương đương 100 x 7% = 7
                      Movie Ticket
                    </li>
                    <li>
                      Hạng CINEPHILE - tích luỹ 10% tương đương 100 x 10% = 10
                      Movie Ticket
                    </li>
                  </ul>
                </ul>
              </ul>
            </ul>
          </div>
        </div>
        <h2 id="main-sec-2">II. ĐẶT VÉ VÀ THANH TOÁN TRÊN Movie Ticket</h2>
        <div className="m-section">
          <h3 id="m2-sub-sec-1">
            1. Để đặt vé trực tuyến, bạn vui lòng thực hiện các bước sau:
          </h3>
          <div className="section">
            <ul>
              <li>
                Vào phần Lịch chiếu, tìm kiếm vé bạn muốn đặt (bạn có thể tìm
                theo tên, hoặc theo rạp chiếu).
              </li>
              <li>
                Chọn phim, suất chiếu, ghế hoặc các thông tin cần thiết khác.
              </li>
              <li>
                Điền thông tin của người nhận vé và chọn hình thức thanh toán
                phù hợp.
              </li>
              <li>
                Kiểm tra lại các thông tin đơn hàng, thông tin nhận vé, hình
                thức và giá trị thanh toán.
                <br />
                Nếu bạn muốn thay đổi, vui lòng bấm dấu x trên gốc trên phía
                trái màn hình để quay về chỉnh sửa.
                <br />
                Nếu các thông tin đã chính xác, vui lòng bấm vào nút đặt vé để
                tiến hành thanh toán.
              </li>
              <p style={{ textAlign: "center" }}>
                <img
                  src="/app/assets/img/legal/payment.png"
                  alt="Thanh toán"
                  style={{
                    maxWidth: 200,
                    display: "block",
                    margin: "10px auto",
                  }}
                />
                <i>
                  Kiểm tra các thông tin đơn hàng, thông tin cá nhân. Nếu sai
                  vui lòng quay về để chỉnh sửa
                </i>
              </p>
            </ul>
          </div>
          <h3 id="m2-sub-sec-2">
            2. Các hình thức thanh toán trực tuyến Movie Ticket đang áp dụng:
          </h3>
          <div className="section">
            <ul>
              <li style={{ marginTop: 15 }}>
                <strong>Thanh toán qua Ví điện tử ZaloPay</strong>
              </li>
              <div style={{ marginLeft: "-25px" }}>
                <p>
                  Để sử dụng phương thức thanh toán này, khách hàng phải có tài
                  khoản ví điện tử ZaloPay. Khách hàng có thể truy cập vào
                  website <a href="https://zalopay.vn/">https://zalopay.vn/</a>{" "}
                  để biết thêm thông tin chi tiết về việc đăng ký tài khoản và
                  sử dụng ZaloPay.
                </p>
                <p>Khách hàng thực hiện thanh toán theo các bước sau:</p>
                <div className="row">
                  <div className="col-sm-6 col-xs-12">
                    <img
                      src="/app/assets/img/legal/p-zlp-step1.png"
                      alt="Zalopay bước 1"
                      style={{
                        maxWidth: 200,
                        display: "block",
                        margin: "10px auto",
                      }}
                    />
                    <i>
                      Bước 1: Chọn phương thanh toán ZaloPay và bấm nút đặt vé
                    </i>
                  </div>
                  <div className="col-sm-6 col-xs-12">
                    <img
                      src="/app/assets/img/legal/p-zlp-step2.png"
                      alt="Zalopay bước 2"
                      style={{
                        maxWidth: 200,
                        display: "block",
                        margin: "10px auto",
                      }}
                    />
                    <i>
                      Bước 2: Kiểm tra giá trị thanh toán và nguồn tiền.
                      <br />
                      Bấm nút hủy nếu bạn muốn chỉnh sửa hoặc bấm nút xác nhận
                      thanh toán để hoàn thành việc đặt vé.
                    </i>
                  </div>
                </div>
              </div>
              <li style={{ marginTop: 15 }}>
                <strong>Thanh toán qua ATM nội địa:</strong>
              </li>
              <div style={{ marginLeft: "-25px" }}>
                <p>
                  Để sử dụng phương thức này, bạn phải có thẻ ATM đã được đăng
                  ký sử dụng dịch vụ internet banking.
                </p>
                <p>Để thanh toán Khách hàng thực hiện các bước sau:</p>
                <div className="row">
                  <div className="col-sm-6 col-xs-12">
                    <img
                      src="/app/assets/img/legal/p-atm-step1.png"
                      alt="ATM bước 1"
                      style={{
                        maxWidth: 200,
                        display: "block",
                        margin: "10px auto",
                      }}
                    />
                    <i>
                      Bước 1: Chọn phương thức thanh toán qua thẻ ATM nội địa và
                      chọn ngân hàng mong muốn
                    </i>
                  </div>
                  <div className="col-sm-6 col-xs-12">
                    <img
                      src="/app/assets/img/legal/p-atm-step2.png"
                      alt="ATM bước 2"
                      style={{
                        maxWidth: 200,
                        display: "block",
                        margin: "10px auto",
                      }}
                    />
                    <i>
                      Bước 2: Nhập thông tin thẻ và kiểm tra giá trị thanh toán.
                      <br />
                      Bấm nút hủy nếu bạn muốn chỉnh sửa hoặc bấm nút thanh toán
                      để hoàn thành việc đặt vé.
                    </i>
                  </div>
                </div>
              </div>
              <li style={{ marginTop: 15 }}>
                <strong>Thanh toán qua Visa/Master:</strong>
              </li>
              <div style={{ marginLeft: "-25px" }}>
                <p>Để thanh toán Khách hàng thực hiện các bước sau:</p>
                <div className="row">
                  <div className="col-sm-6 col-xs-12">
                    <img
                      src="/app/assets/img/legal/p-cc-step1.png"
                      alt="Visa/Master bước 1"
                      style={{
                        maxWidth: 200,
                        display: "block",
                        margin: "10px auto",
                      }}
                    />
                    <i>
                      Bước 1: Chọn phương thức thanh toán qua thẻ
                      Visa/Master/JCB.
                    </i>
                  </div>
                  <div className="col-sm-6 col-xs-12">
                    <img
                      src="/app/assets/img/legal/p-cc-step2.png"
                      alt="Visa/Master bước 2"
                      style={{
                        maxWidth: 200,
                        display: "block",
                        margin: "10px auto",
                      }}
                    />
                    <i>
                      Bước 2: Nhập thông tin thẻ và kiểm tra giá trị thanh toán.
                      <br />
                      Bấm nút “&lt;” nếu bạn muốn chỉnh sửa hoặc bấm nút thanh
                      toán để hoàn thành việc đặt vé
                    </i>
                  </div>
                </div>
              </div>
              <li style={{ marginTop: 15 }}>
                <strong>Thanh toán qua Payoo tại cửa hàng tiện lợi:</strong>
              </li>
              <div style={{ marginLeft: "-25px" }}>
                <p>Để thanh toán Khách hàng thực hiện các bước sau:</p>
                <div className="row">
                  <div className="col-sm-6 col-xs-12">
                    <img
                      src="/app/assets/img/legal/p-payoo-step1.png"
                      alt="Payoo bước 1"
                      style={{
                        maxWidth: 200,
                        display: "block",
                        margin: "10px auto",
                      }}
                    />
                    <i>Bước 1: Chọn phương thức thanh toán Payoo</i>
                  </div>
                  <div className="col-sm-6 col-xs-12">
                    <img
                      src="/app/assets/img/legal/p-payoo-step2.png"
                      alt="Payoo bước 2"
                      style={{
                        maxWidth: 200,
                        display: "block",
                        margin: "10px auto",
                      }}
                    />
                    <i>
                      Bước 2: Bấm nút “X” nếu bạn muốn chỉnh sửa hoặc đem mã
                      thanh toán ra cửa hàng tiện lợi* để thanh toán.
                      <br />
                      *bấm vào mục “Nhấn vào đây để tìm các cửa hàng thanh toán
                      của Payoo” để tìm cửa hàng bạn nhé.
                    </i>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <h2 id="main-sec-3">III. CHÍNH SÁCH CHUYỂN/GIAO NHẬN VÉ</h2>
        <div className="m-section">
          <div className="section">
            <p>
              Ngay sau khi đặt vé trực tuyến thành công, Movie Ticket sẽ gửi mã
              vé qua SMS và Email mà bạn đăng ký nhận khi đặt vé. Sau đó, bạn
              vui lòng đến quầy dịch vụ khách hàng tại rạp, xuất trình mã vé để
              đổi sang vé giấy vào xem phim.
            </p>
            <p>
              Trong trường hợp không nhận được bất kỳ thông tin mã vé nào từ
              Movie Ticket, bạn vui lòng liên hệ tổng đài 1900&nbsp;545&nbsp; để
              Movie Ticket kiểm tra và hỗ trợ ngay cho bạn.
            </p>
          </div>
        </div>
        <h2 id="main-sec-4">IV. CHÍNH SÁCH ĐỔI/TRẢ HOÀN TIỀN</h2>
        <div className="m-section">
          <div className="section">
            <p>
              Rất tiếc, Movie Ticket chưa hỗ trợ dịch vụ hủy hay thay đổi thông
              tin vé bạn đã thanh toán thành công. Trước khi thanh toán cho vé,
              bạn nên xác nhận lại Tên phim, Giờ chiếu và Rạp chiếu của bộ phim
              bạn muốn xem.
            </p>
          </div>
        </div>
        <h2 id="main-sec-5">V. CHẤP NHẬN VÀ ĐỒNG Ý CÁC ĐIỀU KHOẢN SỬ DỤNG</h2>
        <div className="m-section">
          <div className="section">
            <p>
              Khi đã sử dụng website và các sản phẩm liên quan đến Movie Ticket
              đồng nghĩa với việc bạn đã chấp nhận và đồng ý với những ràng buộc
              về mặt pháp lý, và tuân thủ theo quy chế hoạt động và điều khoản
              sử dụng của Movie Ticket.
            </p>
            <p>
              Movie Ticket có quyền thay đổi, bổ sung quy chế hoạt động và điều
              khoản sử dụng trên website và các sản phẩm liên quan vào bất cứ
              lúc nào. Người sử dụng có trách nhiệm cập nhật và theo dõi những
              thay đổi mới nhất trên website Movie Ticket. Nếu bạn không đồng ý
              với những thay đổi mới nhất, bạn có quyền yêu cầu ngưng sử dụng
              tài khoản tại website và các sản phẩm liên quan của Movie Ticket.
            </p>
            <p>
              Tài khoản của bạn trên Movie Ticket không dùng để trao đổi, mua
              bán với mục đích thương mại.
            </p>
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default Rules;
