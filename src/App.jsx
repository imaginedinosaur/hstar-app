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

// --- Custom SVGs for Exact UI Matching ---

// 1. CHSI Header Logo (The "Book/Stack" icon)
const ChsiLogo = () => (
  <svg width="28" height="28" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
    <path d="M220 800c0 0 100-80 300-80s280 80 280 80V300c0 0-80-80-280-80S220 300 220 300v500z" fill="#ffffff" fillOpacity="0.9"/>
    <path d="M260 760c0 0 80-60 260-60s240 60 240 60V280c0 0-60-60-240-60S260 280 260 280v480z" fill="#ffffff" />
    <path d="M180 340c0 0 40-40 140-40s140 40 140 40" stroke="#ffffff" strokeWidth="40" strokeLinecap="round"/>
    <path d="M140 850c0 0 140-100 380-100s360 100 360 100" stroke="#ffffff" strokeWidth="30" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

// 2. Default Avatar Silhouette (Gray Person)
const DefaultAvatar = () => (
  <div className="w-full h-full bg-[#E5E7EB] flex items-end justify-center overflow-hidden">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[80%] h-[80%] text-[#9CA3AF]">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2ZM9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7Z" 
        fill="currentColor"
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M12 13.5C7.5 13.5 4 16.5 4 19.5V21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21V19.5C20 16.5 16.5 13.5 12 13.5Z" 
        fill="currentColor"
      />
    </svg>
  </div>
);

// --- Components ---

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
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header with Custom Logo */}
      <div className="bg-[#28c495] text-white p-4 flex justify-center items-center relative h-12 shadow-sm shrink-0">
        <div className="flex items-center gap-1 font-bold text-lg">
          <ChsiLogo />
          <span>学信档案</span>
        </div>
        <LogOut className="absolute right-4" size={20} />
      </div>

      <div className="flex-1 overflow-y-auto pb-20">
        {/* Responsibility Test Card */}
        <div className="m-3 bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                <User size={30} className="text-blue-500" />
             </div>
             <div>
               <h3 className="text-gray-800 font-medium">责任心测试</h3>
             </div>
          </div>
          <button className="bg-[#28c495] text-white text-sm px-4 py-1.5 rounded-full shadow-sm hover:bg-emerald-600 transition">
            去测评
          </button>
        </div>

        {/* Survey Banner */}
        <div className="mx-3 mb-4 bg-blue-50 rounded-lg p-4 flex justify-between items-center relative overflow-hidden">
           <div className="z-10">
              <h3 className="text-blue-700 font-bold text-lg">高校校园学习状况调查</h3>
              <button className="mt-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">立即前往 &gt;</button>
           </div>
           <div className="absolute right-0 bottom-0 opacity-50">
              <div className="flex items-end gap-1">
                 <div className="w-6 h-12 bg-red-300 rounded-t"></div>
                 <div className="w-8 h-16 bg-yellow-200 rounded-t"></div>
                 <div className="w-6 h-10 bg-blue-200 rounded-t"></div>
              </div>
           </div>
        </div>

        {/* Grid Menu */}
        <div className="grid grid-cols-3 gap-y-6 bg-transparent px-2">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center gap-2 cursor-pointer active:scale-95 transition-transform"
              onClick={item.action || null}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-gray-600 text-xs w-20 leading-tight">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 flex justify-around py-2 text-xs text-gray-500 absolute bottom-0 w-full z-10">
        <div className="flex flex-col items-center text-[#28c495]">
          <Home size={20} />
          <span className="mt-1">首页</span>
        </div>
        <div className="flex flex-col items-center">
          <GraduationCap size={20} />
          <span className="mt-1">学籍学历学位</span>
        </div>
        <div className="flex flex-col items-center">
          <ClipboardCheck size={20} />
          <span className="mt-1">个人测评</span>
        </div>
        <div className="flex flex-col items-center">
          <Briefcase size={20} />
          <span className="mt-1">求职招聘</span>
        </div>
        <div className="flex flex-col items-center">
          <User size={20} />
          <span className="mt-1">我的</span>
        </div>
      </div>
    </div>
  );
};

// 2. Education List Component
const EducationList = ({ onNavigate, data }) => {
  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* Header */}
      <div className="bg-[#28c495] text-white p-3 flex items-center relative h-12 shadow-sm shrink-0">
        <ChevronLeft size={24} className="absolute left-2 cursor-pointer" onClick={() => onNavigate('home')} />
        <span className="w-full text-center font-medium text-lg">高等教育信息</span>
      </div>

      <div className="flex-1 overflow-y-auto p-3">
        {/* Banner */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-400 rounded-lg p-4 mb-4 text-white flex justify-between items-center shadow-md">
           <div>
             <div className="flex items-center gap-2 mb-1">
               <span className="font-bold text-lg">专业推荐</span>
               <span className="bg-white/20 text-xs px-1 rounded">推荐</span>
             </div>
             <div className="text-sm opacity-90">本校优势专业或特色专业</div>
           </div>
           <GraduationCap size={40} className="opacity-80" />
        </div>

        {/* Section 1: Student Status */}
        <div className="flex justify-between items-end mb-2">
           <h3 className="text-gray-800 font-medium text-lg">学籍信息 (1)</h3>
           <span className="text-xs text-teal-600">还有学籍没有显示出来？ <span className="underline">尝试绑定</span></span>
        </div>

        {/* Card 2: Undergraduate - CLICKABLE & DYNAMIC */}
        <div 
          className="bg-[#28c495] rounded-lg p-4 mb-6 shadow-sm text-white relative overflow-hidden cursor-pointer active:opacity-90 transition-opacity"
          onClick={() => onNavigate('detail')}
        >
           <div className="flex justify-between items-start">
              <div>
                 <h2 className="text-xl font-medium mb-2">{data.school}</h2>
                 <div className="flex items-center text-sm opacity-90 gap-3">
                    <span>{data.major}</span>
                    <span className="w-px h-3 bg-white/50"></span>
                    <span>{data.mode}</span>
                 </div>
              </div>
              <span className="bg-black/10 text-xs px-2 py-1 rounded-full">{data.level}</span>
           </div>
        </div>

        {/* Section 2: Degree Info */}
        <div className="flex justify-between items-end mb-2">
           <h3 className="text-gray-800 font-medium text-lg">学历信息 (1)</h3>
           <span className="text-xs text-gray-500">还有学历没有显示出来？ <span className="text-teal-600 underline">尝试绑定</span></span>
        </div>

        <div className="bg-blue-500 rounded-lg p-4 mb-6 shadow-sm text-white relative overflow-hidden">
           <div className="flex justify-between items-start">
              <div>
                 <h2 className="text-xl font-medium mb-2">{data.school}</h2>
                 <div className="flex items-center text-sm opacity-90 gap-3">
                    <span>{data.major}</span>
                    <span className="w-px h-3 bg-white/50"></span>
                    <span>{data.mode}</span>
                 </div>
              </div>
              <span className="bg-black/10 text-xs px-2 py-1 rounded-full">{data.level}</span>
           </div>
        </div>

        {/* Section 3: Degree Cert */}
        <div className="flex justify-between items-end mb-2">
           <h3 className="text-gray-800 font-medium text-lg">学位信息</h3>
           <span className="text-xs text-gray-500">还有学位没有显示出来？ <span className="text-teal-600 underline">尝试绑定</span></span>
        </div>
        
        <div className="bg-white rounded-lg p-6 text-center border border-gray-100 shadow-sm">
           <p className="text-gray-600 text-sm mb-4 leading-relaxed">
             您还未绑定学位信息，可以使用“尝试绑定学位”功能绑定您的学位 <span className="inline-block w-4 h-4 rounded-full border border-gray-400 text-gray-400 text-[10px] leading-3 text-center">?</span>
           </p>
           <div className="flex justify-center">
              <button className="text-teal-500 text-sm flex items-center gap-1">
                 提示信息 <span className="rotate-90 text-xs">&gt;</span>
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

// 3. Student Detail Component
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
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-white text-gray-800 p-3 flex items-center relative h-12 shrink-0 border-b border-gray-100">
        <ChevronLeft size={24} className="absolute left-2 cursor-pointer text-gray-600" onClick={() => onNavigate('list')} />
        <span className="w-full text-center font-bold text-lg">高等学籍</span>
      </div>

      <div className="flex-1 overflow-y-auto">
        
        {/* Banner */}
        <div className="mx-4 mt-4 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg p-3 flex items-center justify-between text-white shadow-sm">
           <div>
             <div className="flex items-center gap-2">
               <span className="font-bold">专业满意度</span>
               <span className="bg-white/20 text-[10px] px-1.5 rounded-full border border-white/40">投票</span>
             </div>
             <div className="text-[10px] opacity-90 mt-1">本专业的办学条件、教学质量、就业情况及综合情况</div>
           </div>
           <div className="bg-white/10 p-1 rounded">
             <MessageSquare size={20} />
           </div>
        </div>

        {/* Main Card */}
        <div className="mx-4 mt-4 bg-gradient-to-br from-[#28c495] to-[#4ade80] rounded-xl p-5 text-white shadow-lg relative overflow-hidden">
           {/* Photo Row */}
           <div className="flex gap-4 mb-4">
              {/* Admit Photo - Clickable for upload */}
              <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={handlePhotoClick}>
                 <div className="w-16 h-20 bg-gray-200 rounded border-2 border-white overflow-hidden relative group">
                    {data.admitPhoto ? (
                      <img src={data.admitPhoto} alt="Admit" className="w-full h-full object-cover" />
                    ) : (
                      <DefaultAvatar />
                    )}
                    {/* Upload overlay hint */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera size={20} />
                    </div>
                 </div>
                 <span className="text-[10px] opacity-80 flex items-center gap-1">录取照片 <Upload size={8} /></span>
                 <input 
                   type="file" 
                   ref={fileInputRef} 
                   onChange={handleFileChange} 
                   className="hidden" 
                   accept="image/*"
                 />
              </div>

              <div className="flex flex-col items-center gap-1">
                 <div className="w-16 h-20 bg-gray-200 rounded border-2 border-white overflow-hidden">
                     {/* Static default for degree photo as per request to look like red circle */}
                     <DefaultAvatar />
                 </div>
                 <span className="text-[10px] opacity-80">学历照片</span>
              </div>
              
              <div className="ml-2 pt-1">
                 <h2 className="text-xl font-medium mb-1">{data.name}</h2>
                 <p className="text-sm opacity-90">{data.gender} &nbsp; {data.dob}</p>
              </div>
           </div>

           <div className="mt-2">
              <h3 className="text-xl font-medium mb-1">{data.school}</h3>
              <div className="flex justify-between items-center">
                 <div className="flex items-center gap-3 text-sm opacity-90">
                    <span>{data.major}</span>
                    <span className="w-px h-3 bg-white/50"></span>
                    <span>{data.mode}</span>
                 </div>
                 <span className="bg-black/10 px-2 py-0.5 rounded text-xs">{data.level}</span>
              </div>
           </div>
        </div>

        {/* Detail List */}
        <div className="p-6 space-y-4 text-sm text-gray-500">
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
        </div>

        {/* Bottom Button Area */}
        <div className="p-4 pb-8">
           <button className="w-full bg-[#28c495] text-white py-3 rounded text-base font-medium shadow-sm active:bg-emerald-600">
              查看验证报告
           </button>
        </div>
      </div>
    </div>
  );
};

// 4. Edit Page Component
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
       {/* Header */}
      <div className="bg-white text-gray-800 p-3 flex items-center justify-between relative h-12 shrink-0 border-b border-gray-100 shadow-sm z-10">
        <div className="flex items-center">
          <ChevronLeft size={24} className="cursor-pointer text-gray-600" onClick={() => onNavigate('home')} />
          <span className="ml-2 font-bold text-lg">编辑信息</span>
        </div>
        <button onClick={handleSave} className="text-teal-600 font-medium flex items-center gap-1">
          <Save size={18} /> 保存
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-20">
        <div className="space-y-1">
          <p className="text-xs text-gray-400 mb-4 bg-gray-50 p-2 rounded">
             提示：在此处修改的信息将实时更新到“高等教育信息”和“详情页”中。
          </p>

          <h3 className="text-teal-600 font-bold mt-4 mb-2">基本信息</h3>
          <div className={rowClass}><span className={labelClass}>姓名</span><input name="name" value={formData.name} onChange={handleChange} className={inputClass} /></div>
          <div className={rowClass}><span className={labelClass}>性别</span><input name="gender" value={formData.gender} onChange={handleChange} className={inputClass} /></div>
          <div className={rowClass}><span className={labelClass}>出生日期</span><input name="dob" value={formData.dob} onChange={handleChange} className={inputClass} /></div>
          <div className={rowClass}><span className={labelClass}>证件号码</span><input name="idNumber" value={formData.idNumber} onChange={handleChange} className={inputClass} /></div>
          <div className={rowClass}><span className={labelClass}>民族</span><input name="nation" value={formData.nation} onChange={handleChange} className={inputClass} /></div>

          <h3 className="text-teal-600 font-bold mt-6 mb-2">学籍信息</h3>
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

        {/* Disclaimer Footer */}
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

const DetailRow = ({ label, value }) => (
  <div className="flex">
     <span className="w-24 text-right mr-6 text-gray-400 shrink-0">{label}</span>
     <span className="text-gray-800 flex-1 break-all">{value}</span>
  </div>
);

// --- Main App Container ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  // Centralized State for Data
  // Set admitPhoto to null initially to show the DefaultAvatar
  const [studentData, setStudentData] = useState({
    name: "薛文博",
    gender: "男",
    dob: "2002年01月27日",
    school: "河海大学",
    major: "水利水电工程",
    mode: "普通全日制",
    level: "本科",
    nation: "汉族",
    idNumber: "150102200201274612",
    duration: "4 年",
    category: "普通高等教育",
    branch: "0",
    department: "水利水电学院",
    class: "水工20-2",
    studentId: "2002010229",
    admissionDate: "2020年09月07日",
    status: "不在籍（毕业）",
    leaveDate: "2024年06月21日",
    admitPhoto: null, // Set to null to trigger default silhouette
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
    <div className="flex items-center justify-center min-h-screen bg-gray-200 font-sans">
      {/* Mobile Device Simulator Container */}
      <div className="w-full max-w-[400px] h-[850px] bg-white relative shadow-2xl overflow-hidden flex flex-col">
        {/* Content Area */}
        <div className="flex-1 overflow-hidden relative bg-gray-50">
          {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
          {currentPage === 'list' && <EducationList onNavigate={setCurrentPage} data={studentData} />}
          {currentPage === 'detail' && <StudentDetail onNavigate={setCurrentPage} data={studentData} onUploadPhoto={handlePhotoUpload} />}
          {currentPage === 'edit' && <EditPage onNavigate={setCurrentPage} data={studentData} onUpdate={handleUpdateData} />}
        </div>
        
        {/* Navigation Bar Simulator (Bottom of phone) - Visual only */}
        <div className="h-4 bg-white shrink-0 flex justify-center items-center z-50">
            <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}