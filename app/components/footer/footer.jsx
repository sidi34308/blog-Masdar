import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">من نحن</h3>
                        <p>
                            نحن موقع إخباري يقدم أحدث الأخبار والمعلومات حول مواضيع مختلفة. نهدف إلى تقديم تقارير دقيقة وموثوقة لمتابعينا.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">اتصل بنا</h3>
                        <p>
                            يمكنك التواصل معنا عبر البريد الإلكتروني أو الهاتف لأي استفسارات أو اقتراحات. نحن هنا للمساعدة.
                        </p>
                        <ul>
                            <li>البريد الإلكتروني: info@example.com</li>
                            <li>الهاتف: 123-456-7890</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
                        <ul>
                            <li><a href="/" className="hover:underline">الرئيسية</a></li>
                            <li><a href="/news" className="hover:underline">أخبار</a></li>
                            <li><a href="/economy" className="hover:underline">اقتصاد</a></li>
                            <li><a href="/analysis" className="hover:underline">تحليلات</a></li>
                            <li><a href="/contact" className="hover:underline">اتصل بنا</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                    <p>&copy; 2024 موقع الأخبار. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
