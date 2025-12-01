import React, { useState, useRef } from 'react';
import { 
  ChevronLeft, 
  LogOut, 
  GraduationCap, 
  ShieldCheck, 
  FileBadge, 
  Globe, 
  UserCheck, 
  Briefcase, 
  Smile, 
  ClipboardCheck, 
  User,
  Home,
  MessageSquare,
  Upload,
  Save,
  Camera
} from 'lucide-react';

// --- 1. 图标组件 ---

// 学信网 Logo
const ChsiLogo = () => (
  <svg width="24" height="24" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1.5">
    <path d="M220 800c0 0 100-80 300-80s280 80 280 80V300c0 0-80-80-280-80S220 300 220 300v500z" fill="#ffffff" fillOpacity="0.9"/>
    <path d="M260 760c0 0 80-60 260-60s240 60 240 60V280c0 0-60-60-240-60S260 280 260 280v480z" fill="#ffffff" />
    <path d="M180 340c0 0 40-40 140-40s140 40 140 40" stroke="#ffffff" strokeWidth="40" strokeLinecap="round"/>
    <path d="M140 850c0 0 140-100 380-100s360 100 360 100" stroke="#ffffff" strokeWidth="30" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

// 默认头像 (灰色剪影)
const DefaultAvatar = () => (
  <div className="w-full h-full bg-[#E0E0E0] flex flex-col items-center justify-end">
    <div className="w-[45%] h-[32%] bg-[#9E9E9E] rounded-full mb-1"></div>
    <div className="w-[75%] h-[38%] bg-[#9E9E9E] rounded-t-[50%]"></div>
  </div>
);

// --- 2. 页面组件 ---

// 首页
const HomePage = ({ onNavigate }) => {
  const menuItems = [
    { title: "高等教育信息", icon: <GraduationCap size={28} className="text-teal-500" />, action: () => onNavigate('list') },
    { title: "在线验证报告", icon: <ShieldCheck size={28} className="text-emerald-500" /> },
    { title: "学历学位认证与成绩验证", icon: <FileBadge size={28} className="text-green-600" /> },
    { title: "出国报告发送", icon: <Globe size={28} className="text-blue-500" /> },
    { title: "毕业证书图像校对", icon: <UserCheck size={28} className="text-teal-600" /> },
    { title: "就业", icon: <Briefcase size={28} className="text-teal-500" /> },
    { title: "学校满意度", icon: <Smile size={28} className="text-yellow-500" /> },
    { title: "个人测评", icon: <ClipboardCheck size={28} className="text-blue-400" /> },
    { title: "信息核查确认", icon: <ShieldCheck size={28} className="text-blue-600" />, action: () => onNavigate('edit') },
    { title: "“双千”计划 “微专业”", icon: <span className="bg-blue-500 text-white text-xs p-1 rounded">双千</span> },
  ];

  return (
    <div className="flex flex-col h-full bg-[#F2F4F7]">
      <div className="bg-[#00C19D] text-white p-4 flex justify-center items-center relative h-[46px] shadow-sm shrink-0">
        <div className="flex items-center font-bold text-[17px] tracking-wide">
          <ChsiLogo />
          <span>学信档案</span>
        </div>
        <LogOut className="absolute right-3" size={18} />
      </div>

      <div className="flex-1 overflow-y-auto pb-20">
        <div className="mx-3 mt-3 bg-white rounded-lg p-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                <User size={24} className="text-blue-500" />
             </div>
             <div>
               <h3 className="text-gray-800 font-medium text-[15px]">责任心测试</h3>
             </div>
          </div>
          <button className="bg-[#00C19D] text-white text-[13px] px-4 py-1.5 rounded-full hover:bg-emerald-600 transition">
            去测评
          </button>
        </div>

        <div className="mx-3 my-3 bg-[#E6F4FF] rounded-lg p-3 flex justify-between items-center relative overflow-hidden">
           <div className="z-10">
              <h3 className="text-[#007BFF] font-bold text-[16px] mb-1">高校校园学习状况调查</h3>
              <button className="bg-[#007BFF] text-white text-[10px] px-1.5 py-0.5 rounded">立即前往 &gt;</button>
           </div>
           <div className="absolute right-2 bottom-0 flex items-end opacity-80">
              <div className="w-4 h-8 bg-[#FF9E9E] rounded-t-sm mr-1"></div>
              <div className="w-5 h-12 bg-[#FFE58F] rounded-t-sm mr-1 flex flex-col gap-1 p-0.5">
                  <div className="w-full h-1 bg-white/30"></div>
                  <div className="w-full h-1 bg-white/30"></div>
              </div>
              <div className="w-4 h-6 bg-[#91CAFF] rounded-t-sm"></div>
           </div>
        </div>

        <div className="grid grid-cols-3 gap-y-6 bg-transparent px-2 mt-2">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center gap-1 cursor-pointer active:scale-95 transition-transform"
              onClick={item.action || null}
            >
              <div className="flex items-center justify-center h-10">
                {item.icon}
              </div>
              <span className="text-[#646566] text-[12px] w-20 leading-tight transform scale-95">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border-t border-gray-200 flex justify-around py-1.5 text-[10px] text-gray-500 absolute bottom-0 w-full z-10 font-normal">
        <div className="flex flex-col items-center text-[#00C19D]">
          <Home size={20} />
          <span className="mt-0.5 scale-90">首页</span>
        </div>
        <div className="flex flex-col items-center">
          <GraduationCap size={20} />
          <span className="mt-0.5 scale-90">学籍学历学位</span>
        </div>
        <div className="flex flex-col items-center">
          <ClipboardCheck size={20} />
          <span className="mt-0.5 scale-90">个人测评</span>
        </div>
        <div className="flex flex-col items-center">
          <Briefcase size={20} />
          <span className="mt-0.5 scale-90">求职招聘</span>
        </div>
        <div className="flex flex-col items-center">
          <User size={20} />
          <span className="mt-0.5 scale-90">我的</span>
        </div>
      </div>
    </div>
  );
};

// 列表页
const EducationList = ({ onNavigate, data }) => {
  return (
    <div className="flex flex-col h-full bg-[#F7F8FA]">
      <div className="bg-[#00C19D] text-white p-3 flex items-center relative h-[46px] shrink-0">
        <ChevronLeft size={24} className="absolute left-2 cursor-pointer" onClick={() => onNavigate('home')} />
        <span className="w-full text-center font-bold text-[17px]">高等教育信息</span>
      </div>

      <div className="flex-1 overflow-y-auto p-3">
        <div className="bg-gradient-to-r from-[#29C6CD] to-[#2D9BF0] rounded-lg p-3 mb-3 text-white flex justify-between items-center shadow-sm">
           <div>
             <div className="flex items-center gap-1 mb-0.5">
               <span className="font-bold text-[16px] tracking-wide">专业推荐</span>
               <span className="bg-white/20 text-[10px] px-1 rounded border border-white/30 transform scale-90 origin-left">推荐</span>
             </div>
             <div className="text-[12px] opacity-90">本校优势专业或特色专业</div>
           </div>
           <div className="bg-white/10 p-1 rounded-lg">
             <GraduationCap size={28} className="text-white" />
           </div>
        </div>

        <div className="flex justify-between items-end mb-2 px-0.5">
           <h3 className="text-[#323233] font-bold text-[15px]">学籍信息 (1)</h3>
           <span className="text-[12px] text-[#00C19D] transform scale-95 origin-right">还有学籍没有显示出来？ <span className="underline cursor-pointer">尝试绑定</span></span>
        </div>

        <div 
          className="bg-[#00C19D] rounded-lg p-4 mb-5 shadow-sm text-white relative overflow-hidden cursor-pointer active:opacity-95"
          onClick={() => onNavigate('detail')}
        >
           <div className="flex justify-between items-start">
              <div>
                 <h2 className="text-[18px] font-bold mb-1">{data.school}</h2>
                 <div className="flex items-center text-[12px] opacity-90 gap-2">
                    <span>{data.major}</span>
                    <span className="w-px h-3 bg-white/60"></span>
                    <span>{data.mode}</span>
                 </div>
              </div>
              <span className="bg-[#0000001A] text-[10px] px-1.5 py-0.5 rounded text-center min-w-[36px]">{data.level}</span>
           </div>
        </div>

        <div className="flex justify-between items-end mb-2 px-0.5">
           <h3 className="text-[#323233] font-bold text-[15px]">学历信息 (1)</h3>
           <span className="text-[12px] text-[#969799] transform scale-95 origin-right">还有学历没有显示出来？ <span className="text-[#00C19D] underline cursor-pointer">尝试绑定</span></span>
        </div>

        <div className="bg-[#4E8DFF] rounded-lg p-4 mb-5 shadow-sm text-white relative overflow-hidden">
           <div className="flex justify-between items-start">
              <div>
                 <h2 className="text-[18px] font-bold mb-1">{data.school}</h2>
                 <div className="flex items-center text-[12px] opacity-90 gap-2">
                    <span>{data.major}</span>
                    <span className="w-px h-3 bg-white/60"></span>
                    <span>{data.mode}</span>
                 </div>
              </div>
              <span className="bg-[#0000001A] text-[10px] px-1.5 py-0.5 rounded text-center min-w-[36px]">{data.level}</span>
           </div>
        </div>

        <div className="flex justify-between items-end mb-2 px-0.5">
           <h3 className="text-[#323233] font-bold text-[15px]">学位信息</h3>
           <span className="text-[12px] text-[#969799] transform scale-95 origin-right">还有学位没有显示出来？ <span className="text-[#00C19D] underline cursor-pointer">尝试绑定</span></span>
        </div>
        
        <div className="bg-white rounded-lg p-6 text-center border border-gray-100 shadow-sm">
           <p className="text-[#646566] text-[13px] mb-4 leading-relaxed">
             您还未绑定学位信息，可以使用“尝试绑定学位”功能绑定您的学位 <span className="inline-block w-3.5 h-3.5 rounded-full border border-[#969799] text-[#969799] text-[10px] leading-[12px] text-center">?</span>
           </p>
           <div className="flex justify-center">
              <button className="text-[#00C19D] text-[13px] flex items-center gap-1 font-medium">
                 提示信息 <span className="rotate-90 text-[10px] text-[#969799]">&gt;</span>
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- 详情页 (严格基于源代码 HTML 结构重构) ---
const StudentDetail = ({ onNavigate, data, onUploadPhoto }) => {
  const fileInputRef = useRef(null);

  const handlePhotoClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUploadPhoto(file);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white font-sans">
      {/* 头部 (van-nav-bar) */}
      <div className="bg-white text-[#323233] flex items-center justify-center relative h-[46px] shrink-0 border-b border-[#ebedf0] z-20">
        <div className="absolute left-0 flex items-center h-full px-4 active:bg-[#f2f3f5]" onClick={() => onNavigate('list')}>
          <ChevronLeft size={22} className="text-[#1989fa]" />
        </div>
        <div className="text-[16px] font-medium max-w-[60%] truncate">高等学籍</div>
      </div>

      {/* 内容区域 (xj-index chsi-font) */}
      <div className="flex-1 overflow-y-auto bg-white p-4">
        
        {/* Banner (视觉元素，保持在上方) */}
        <div className="bg-gradient-to-r from-[#FF8800] to-[#FF6600] rounded-lg p-3 mb-4 flex items-center justify-between text-white shadow-sm">
           <div>
             <div className="flex items-center gap-2 mb-0.5">
               <span className="font-bold text-[16px]">专业满意度</span>
               <span className="bg-white/20 text-[10px] px-1.5 py-0.5 rounded-full border border-white/40">投票</span>
             </div>
             <div className="text-[11px] opacity-90">本专业的办学条件、教学质量、就业情况及综合情况</div>
           </div>
           <div className="bg-white/20 p-1.5 rounded ml-2">
             <MessageSquare size={18} fill="white" className="text-white" />
           </div>
        </div>
          
        {/* Top Card (.top-card) - 绿卡 */}
        <div className="bg-[#00C19D] rounded-lg p-4 text-white shadow-md mb-6">
           
           {/* Row 1: Photos + Name (.van-row) */}
           {/* 左侧 37.5% (.van-col--9), 右侧 62.5% (.van-col--15) */}
           <div className="flex mb-4">
              
              {/* 照片区域 (.van-col--9) */}
              <div className="w-[37.5%] pr-2 flex justify-between gap-2">
                 {/* 录取照片 */}
                 <div className="flex-1 flex flex-col items-center gap-1 cursor-pointer" onClick={handlePhotoClick}>
                    <div className="w-full aspect-[3/4] bg-[#f7f8fa] rounded border-2 border-white/80 overflow-hidden relative group box-border">
                      {data.admitPhoto ? (
                        <img src={data.admitPhoto} alt="Admit" className="w-full h-full object-cover" />
                      ) : (
                        <DefaultAvatar />
                      )}
                    </div>
                    <p className="text-[10px] text-center opacity-90 whitespace-nowrap scale-90">录取照片<span className="inline-block ml-0.5 font-sans">↑</span></p>
                    <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
                 </div>

                 {/* 学历照片 */}
                 <div className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full aspect-[3/4] bg-[#f7f8fa] rounded border-2 border-white/80 overflow-hidden box-border">
                        <DefaultAvatar />
                    </div>
                    <p className="text-[10px] text-center opacity-90 whitespace-nowrap scale-90">学历照片</p>
                 </div>
              </div>

              {/* 姓名区域 (.van-col--15) */}
              <div className="w-[62.5%] pl-2 flex flex-col justify-center">
                 <h5 className="text-[20px] font-bold mb-1.5 tracking-wide leading-tight">{data.name}</h5>
                 <p className="text-[13px] opacity-90 leading-tight">{data.gender}　{data.dob}</p>
                 {/* 占位符以确保对齐 */}
                 <div className="h-4"></div>
              </div>
           </div>

           {/* Row 2: School Info (.top-bottom-img .xj-detail-img) */}
           {/* 这部分在 HTML 中是独立的 div，位于 row 下方 */}
           <div className="relative pt-1">
              <div className="flex justify-between items-start mb-1">
                 {/* 学校名称 (.yxmc) */}
                 <div className="text-[20px] font-bold tracking-wide leading-tight">{data.school}</div>
                 {/* 标签 (.cc .xj-cc-lable) */}
                 <div className="bg-[#0000001A] px-2 py-0.5 rounded text-[12px] leading-tight">{data.level}</div>
              </div>
              {/* 专业描述 (.des) */}
              <div className="text-[13px] opacity-90 font-light">
                 {data.major}　|　{data.mode}
              </div>
           </div>
        </div>

        {/* 详情列表 (.xj-c .gdjy-view-ul) */}
        <div className="mb-6">
           <ul className="space-y-4">
              <DetailRow label="民族" value={data.nation} />
              <DetailRow label="证件号码" value={data.idNumber} />
              <DetailRow label="学制" value={data.duration} />
              <DetailRow label="学历类别" value={data.category} />
              <DetailRow label="分院" value={data.branch} />
              <DetailRow label="系所" value={data.department} />
              <DetailRow label="班级" value={data.class} />
              <DetailRow label="学号" value={data.studentId} />
              <DetailRow label="入学日期" value={data.admissionDate} />
              <DetailRow label="学籍状态" value={data.status} />
              <DetailRow label="离校日期" value={data.leaveDate} />
           </ul>
        </div>

        {/* 底部按钮 (.van-button--primary) */}
        <div className="mb-8">
           <button className="w-full bg-[#07c160] text-white h-[44px] rounded-[2px] text-[16px] font-normal active:bg-[#06ad56] transition-colors flex items-center justify-center border border-[#07c160]">
              查看验证报告
           </button>
        </div>

      </div>
    </div>
  );
};

// 编辑页面
const EditPage = ({ onNavigate, data, onUpdate }) => {
  const [formData, setFormData] = useState({ ...data });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onUpdate(formData);
    onNavigate('home');
  };

  const inputClass = "w-full text-right bg-transparent focus:outline-none text-gray-800 focus:text-teal-600";
  const rowClass = "flex justify-between items-center py-3 border-b border-gray-100";
  const labelClass = "text-gray-500 text-sm w-24";

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="bg-white text-gray-800 p-3 flex items-center justify-between relative h-[46px] shrink-0 border-b border-gray-100 shadow-sm z-10">
        <div className="flex items-center">
          <ChevronLeft size={24} className="cursor-pointer text-gray-600" onClick={() => onNavigate('home')} />
          <span className="ml-2 font-bold text-[16px]">编辑信息</span>
        </div>
        <button onClick={handleSave} className="text-[#00C19D] font-medium flex items-center gap-1 text-[14px]">
          <Save size={16} /> 保存
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-20">
        <div className="space-y-1">
          <p className="text-[12px] text-gray-400 mb-4 bg-gray-50 p-2 rounded">
             提示：在此处修改的信息将实时更新到“高等教育信息”和“详情页”中。
          </p>
          <h3 className="text-[#00C19D] font-bold mt-4 mb-2 text-[14px]">基本信息</h3>
          <div className={rowClass}><span className={labelClass}>姓名</span><input name="name" value={formData.name} onChange={handleChange} className={inputClass} /></div>
          <div className={rowClass}><span className={labelClass}>性别</span><input name="gender" value={formData.gender} onChange={handleChange} className={inputClass} /></div>
          <div className={rowClass}><span className={labelClass}>出生日期</span><input name="dob" value={formData.dob} onChange={handleChange} className={inputClass} /></div>
          <div className={rowClass}><span className={labelClass}>证件号码</span><input name="idNumber" value={formData.idNumber} onChange={handleChange} className={inputClass} /></div>
          <div className={rowClass}><span className={labelClass}>民族</span><input name="nation" value={formData.nation} onChange={handleChange} className={inputClass} /></div>

          <h3 className="text-[#00C19D] font-bold mt-6 mb-2 text-[14px]">学籍信息</h3>
          <div className={rowClass}><span className={labelClass}>学校名称</span><input name="school" value={formData.school} onChange={handleChange} className={inputClass} /></div>
          <div className={rowClass}><span className={labelClass}>专业</span><input name="major" value={formData.major} onChange={handleChange} className={inputClass} /></div>
          <div className={rowClass}><span className={labelClass}>层次</span><input name="level" value={formData.level} onChange={handleChange} className={inputClass} /></div>
          <div className={rowClass}><span className={labelClass}>学习形式</span><input name="mode" value={formData.mode} onChange={handleChange} className={inputClass} /></div>
          <div className={rowClass}><span className={labelClass}>学制</span><input name="duration" value={formData.duration} onChange={handleChange} className={inputClass} /></div>
          <div className={rowClass}><span className={labelClass}>学历类别</span><input name="category" value={formData.category} onChange={handleChange} className={inputClass} /></div>
          <div className={rowClass}><span className={labelClass}>分院</span><input name="branch" value={formData.branch} onChange={handleChange} className={inputClass} /></div>
          <div className={rowClass}><span className={labelClass}>系所</span><input name="department" value={formData.department} onChange={handleChange} className={inputClass} /></div>
          <div className={rowClass}><span className={labelClass}>班级</span><input name="class" value={formData.class} onChange={handleChange} className={inputClass} /></div>
          <div className={rowClass}><span className={labelClass}>学号</span><input name="studentId" value={formData.studentId} onChange={handleChange} className={inputClass} /></div>
          <div className={rowClass}><span className={labelClass}>入学日期</span><input name="admissionDate" value={formData.admissionDate} onChange={handleChange} className={inputClass} /></div>
          <div className={rowClass}><span className={labelClass}>学籍状态</span><input name="status" value={formData.status} onChange={handleChange} className={inputClass} /></div>
          <div className={rowClass}><span className={labelClass}>离校日期</span><input name="leaveDate" value={formData.leaveDate} onChange={handleChange} className={inputClass} /></div>
        </div>

        <div className="mt-8 mb-4 px-4 text-center">
          <p className="text-[10px] text-gray-400 leading-relaxed border-t border-gray-100 pt-4">
            【免责声明】<br/>
            本系统仅供 HSTAR 课题组内部技术交流与前端测试使用，严禁用于任何商业用途或公开传播。
          </p>
        </div>
      </div>
    </div>
  );
};

// 列表项组件
const DetailRow = ({ label, value }) => (
  <li className="flex justify-between items-start text-[14px] leading-[24px]">
     <div className="text-[#646566] w-[90px] shrink-0">{label}</div>
     <div className="text-[#323233] flex-1 text-right break-all">{value}</div>
  </li>
);

// --- 主程序入口 ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  const [studentData, setStudentData] = useState({
    name: "xxx",
    gender: "男",
    dob: "xxxx年xx月xx日",
    school: "河海大学",
    major: "水利水电工程",
    mode: "普通全日制",
    level: "本科",
    nation: "汉族",
    idNumber: "xxx",
    duration: "4 年",
    category: "普通高等教育",
    branch: "0",
    department: "水利水电学院",
    class: "水工xx-x",
    studentId: "xxx",
    admissionDate: "2020年09月07日",
    status: "不在籍（毕业）",
    leaveDate: "2024年06月21日",
    admitPhoto: "https://api.dicebear.com/7.x/avataaars/svg?seed=XueWenbo&gender=male",
    degreePhoto: null
  });

  const handleUpdateData = (newData) => {
    setStudentData(newData);
  };

  const handlePhotoUpload = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setStudentData(prev => ({ ...prev, admitPhoto: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#E5E5E5] font-sans">
      <div className="w-full max-w-[400px] h-[850px] bg-white relative shadow-2xl overflow-hidden flex flex-col">
        <div className="flex-1 overflow-hidden relative bg-[#F7F8FA]">
          {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
          {currentPage === 'list' && <EducationList onNavigate={setCurrentPage} data={studentData} />}
          {currentPage === 'detail' && <StudentDetail onNavigate={setCurrentPage} data={studentData} onUploadPhoto={handlePhotoUpload} />}
          {currentPage === 'edit' && <EditPage onNavigate={setCurrentPage} data={studentData} onUpdate={handleUpdateData} />}
        </div>
        
        <div className="h-4 bg-white shrink-0 flex justify-center items-center z-50">
            <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}