var Config={
		"baseurl":"http://192.168.1.15/daily2_server/api/v1",
        "sessionid":""


    }
    ;

var t;
var NavigationListDATA=[
        {"title":"用户 登录 /login"
            ,"desc":"login in "
            ,"url":"/login/doLogin/:name/:pwd/:lang"
            ,"method":"POST"
            ,"parameters":"name:用户名或邮箱地址 pwd:密码 lang 用户语言环境"
            ,"example_url":"/login/doLogin/haibao/123456/null"
            ,"example_body":""
            ,"example_result":"{}"

        },
        {"title":"用户 菜单 /getMenuTree"
            ,"desc":"getMenuTree 获取 菜单树"
            ,"url":"/menu/getMenuTree"
            ,"method":"POST"
            ,"parameters":""
            ,"example_url":"/menu/getMenuTree"
            ,"example_body":""
            ,"example_result":"{}"

        },
        {"title":"用户 添加头像 /addavatar"
            ,"desc":"http://192.168.1.15:3001/addavatar 添加头像 上传的结果在http://192.168.1.15/uploads"
            ,"url":"http://192.168.1.15:3001/addavatar "
            ,"method":"POST"
            ,"parameters":' filename：文件名\n imgdata:图像数据 data:image/png;base64 '+'\n\n example node.js\n var form = new FormData();\nform.append("filename", "/test/a");\n form.append("imgdata", \nvar http = require("http");\nvar options = {\n"method": "POST",\n"hostname": "192.168.1.15",\n"port": "3001",\n"path": "/addavatar",'
        +'"headers": {\n\n"content-type": "multipart/form-data; boundary=---011000010111000001101001"\n}\n};'
            ,"example_url":"http://192.168.1.15:3001/addavatar"
            ,"example_body":""
            ,"example_result":"{}"

        }, {"title":"用户 上传文件 /addfile"
            ,"desc":"http://192.168.1.15:3001/addfile 上传文件 上传的结果在http://192.168.1.15/uploads"
            ,"url":"http://192.168.1.15:3001/addfile "
            ,"method":"POST"
            ,"parameters":' filename:文件名 可以带目录 形式/test/test.zip 需要带后缀 \n file:file '+'\n\n example node.js\n var form = new FormData();\nform.append("filename", "/test/a");\n form.append("imgdata", \nvar http = require("http");\nvar options = {\n"method": "POST",\n"hostname": "192.168.1.15",\n"port": "3001",\n"path": "/addavatar",'
        +'"headers": {\n\n"content-type": "multipart/form-data; boundary=---011000010111000001101001"\n}\n};'
            ,"example_url":"http://192.168.1.15:3001/addfile"
            ,"example_body":""
            ,"example_result":"{}"

        },
        
        {
			"title":"用户 分页查询用户 /listuser"
            ,"desc":"getMenuTree 分页查询用户 返回值count为条数"
            ,"url":"/user/listuser"
            ,"method":"POST"
            ,"parameters":"page:页数，rows:行数，query:查询条件(中文名或者英文名) {'page':0,'rows':3,'query':null}"
            ,"example_url":"/user/listuser"
            ,"example_body":"{'page':0,'rows':3,'query':null}"
            ,"example_result":"{}"
		},
		{
			"title":"用户 添加(修改)用户 /saveorupdateuser"
            ,"desc":"saveorupdateuser 添加(修改)用户"
            ,"url":"/user/saveorupdateuser"
            ,"method":"POST"
            ,"parameters":""
            ,"example_url":"/user/saveorupdateuser"
            ,"example_body":""
            ,"example_result":"{}"
		},{
			"title":"用户 查看用户信息 /getuser"
            ,"desc":"getuser 查看用户信息"
            ,"url":"/user/getuser/{id}"
            ,"method":"POST"
            ,"parameters":""
            ,"example_url":"/user/getuser/1"
            ,"example_body":""
            ,"example_result":"{}"
		},{
			"title":"用户 删除用户 /deleteuser"
            ,"desc":"deleteuser 删除用户"
            ,"url":"/user/deleteuser/{id}"
            ,"method":"POST"
            ,"parameters":""
            ,"example_url":"/user/deleteuser/77"
            ,"example_body":""
            ,"example_result":"{}"
		},{
			"title":"用户 获取组织机构Tree /getorgtree"
            ,"desc":"getorgtree 获取组织机构Tree"
            ,"url":"/org/getorgtree"
            ,"method":"POST"
            ,"parameters":""
            ,"example_url":"/org/getorgtree"
            ,"example_body":""
            ,"example_result":"{}"
		},
		{"title":"用户 是否唯一 /isOnlyUserByName"
            ,"desc":"isOnlyUserByName 用户是否存在"
            ,"url":"/login/isOnlyUserByName/:name"
            ,"method":"POST"
            ,"parameters":"name:用户名"
            ,"example_url":"/login/isOnlyUserByName/haibao"
            ,"example_body":""
            ,"example_result":"{}"

        },
		
		{
			"title":"产品 下拉查询课程系列/getallcourseseries"
            ,"desc":"getAllCourseSeries 下拉查询课程系列"
            ,"url":"/login/getallcourseseries"
            ,"method":"POST"
            ,"parameters":""
            ,"example_url":"/option/getallcourseseries"
            ,"example_body":""
            ,"example_result":"{}"
		},
		{
			"title":"产品 根据课程系列ID查询课程产品/coursePrd/findCoursewareByQuery"
            ,"desc":"findCoursewareByQuery 根据根据课程系列ID级联查询课程产品"
            ,"url":"/coursePrd/findCoursewareByQuery/:query"
            ,"method":"POST"
            ,"parameters":"query: 查询条件"
            ,"example_url":"/coursePrd/findCoursewareByQuery/0"
            ,"example_body":""
            ,"example_result":"{}"
		},
		{
			"title":"产品 获取教学计划 /getallteachingplan"
            ,"desc":"getorgtree 获取教学计划"
            ,"url":"/teachingPlan/getallteachingplan/{query}"
            ,"method":"POST"
            ,"parameters":""
            ,"example_url":"/teachingPlan/getallteachingplan/null"
            ,"example_body":""
            ,"example_result":"{}"
		},
        {
			"title":"产品 添加教学计划 /addteachingplan"
            ,"desc":"getorgtree 添加教学计划"
            ,"url":"/teachingPlan/addteachingplan"
            ,"method":"POST"
            ,"parameters":'{ "modify_user": 68, "course_level": 0,"create_user": 68,"course_series": 0,"plan_name": "test","is_official": 1}'
            ,"example_url":"/teachingPlan/addteachingplan"
            ,"example_body":""
            ,"example_result":"{}"
		},
		{
			"title":"产品 修改教学计划 /updateteachingplan"
            ,"desc":"getorgtree 修改教学计划"
            ,"url":"/teachingPlan/updateteachingplan"
            ,"method":"POST"
            ,"parameters":'{"id":24, "modify_user": 68, "course_level": 0,"create_user": 68,"course_series": 0,"plan_name": "test","is_official": 1}'
            ,"example_url":"/teachingPlan/updateteachingplan"
            ,"example_body":""
            ,"example_result":"{}"
		},
		{
			"title":"产品 删除教学计划 /deleteteachingplan"
            ,"desc":"getorgtree 删除教学计划"
            ,"url":"/teachingPlan/deleteteachingplan/{id}"
            ,"method":"POST"
            ,"parameters":""
            ,"example_url":"/teachingPlan/deleteteachingplan/20"
            ,"example_body":""
            ,"example_result":"{}"
		},
		{
			"title":"产品 查询计划下的教学单元和教学任务 /queryteachingunitbyplanid"
            ,"desc":"queryteachingunitbyplanid 查询计划下的教学单元和教学任务"
            ,"url":"/teachingUnit/queryteachingunitbyplanid/{planId}"
            ,"method":"POST"
            ,"parameters":""
            ,"example_url":"/teachingUnit/queryteachingunitbyplanid/1"
            ,"example_body":""
            ,"example_result":"{}"
		},{
			"title":"产品 添加教学单元 /addteachingunit"
            ,"desc":"addteachingunit 添加教学单元"
            ,"url":"/teachingUnit/addteachingunit"
            ,"method":"POST"
            ,"parameters":'{"plan_id":1,"unit_no":12,"unit_name":"xuchong","course_type":1,"listeners_scale":1}'
            ,"example_url":"/teachingUnit/addteachingunit"
            ,"example_body":""
            ,"example_result":"{}"
		},{
			"title":"产品 添加学习任务 /addunitlearningtask"
            ,"desc":"addunitlearningtask 添加学习任务"
            ,"url":"/unitLearningTask/addunitlearningtask"
            ,"method":"POST"
             ,"parameters":'{"unit_id":1,"task_no":4,"task_time_range":1,"task_type":2,"estimated_time":120,"time_unit":2}'
            ,"example_url":"/unitLearningTask/addunitlearningtask"
            ,"example_body":""
            ,"example_result":"{}"
		},
		{
			"title":"功能树 查询出所有的主菜单  /getMenuTree"
            ,"desc":"getMenuTree 查询出所有主菜单"
            ,"url":"/funcTree/getMenuTree"
            ,"method":"POST"
            ,"parameters":""
            ,"example_url":"/funcTree/getMenuTree"
            ,"example_body":""
            ,"example_result":"{}"
		}
		,
		{
			"title":"功能树 查询出所有的功能  /getMenuTree"
            ,"desc":"getMenuFuncTree 查询出所有功能"
            ,"url":"/funcTree/getMenuFuncTree"
            ,"method":"POST"
            ,"parameters":""
            ,"example_url":"/funcTree/getMenuFuncTree"
            ,"example_body":""
            ,"example_result":"{}"
		}
		
		,
		{
			"title":"角色 获得所有角色  /getMenuTree"
            ,"desc":"getRoleTree 获得所有角色"
            ,"url":"/roles/getRoleTree"
            ,"method":"POST"
            ,"parameters": ""
            ,"example_url":"/roles/getRoleTree"
            ,"example_body":""
            ,"example_result":"{}"
		}
		,
		{
			"title":"角色 更新角色  /doUpdataRoleTree"
            ,"desc":"doUpdataRoleTree 更新角色信息"
            ,"url":"/roles/doUpdataRoleTree"
            ,"method":"POST"
            ,"parameters": '[{"id":8,"parent_id":8,"seq_no":5,"role_name_lang":96},{"id":9,"parent_id":8,"seq_no":1,"role_name_lang":111}]'
            ,"example_url":"/roles/doUpdataRoleTree"
            ,"example_body":""
            ,"example_result":"{}"
		}
		,
		{
			"title":"角色 删除角色及下级角色  /doDeleteRole"
            ,"desc":"doDeleteRole/{roleId} 删除角色及下级角色"
            ,"url":"/roles/doDeleteRole/{roleId}"
            ,"method":"POST"
            ,"parameters": ""
            ,"example_url":"/roles/doDeleteRole/4"
            ,"example_body":""
            ,"example_result":"{}"
		}
		,
		{
			"title":"角色 保存角色  /doDeleteRole"
            ,"desc":"doSaveRole/{rolePId}/{roleName}/{seqNo} 1. 添多语言  2. 添加角色 3. 添加角色权限n@param roleName  角色的名称\n* @param seqNo 序号\n* @param rolePId 角色id\n* @param rolesPermitJson 权限JSON字符串"
            ,"url":"/roles/doSaveRole/{rolePId}/{roleName}/{seqNo}"
            ,"method":"POST"
            ,"parameters": '[{"func_id":1,"visible":1,"enabled":1},{"func_id":2,"visible":1,"enabled":1},{"func_id":3,"visible":1,"enabled":1},{"func_id":4,"visible":1,"enabled":1}]'
            ,"example_url":"/roles/doSaveRole/8/韩武洽大/10"
            ,"example_body":""
            ,"example_result":"{}"
		}
		,
		{
			"title":"角色 更新角色  /doUpdateRole"
            ,"desc":"doUpdateRole/{roleId}/{sqlNo}/{langResId}/{rolePId}/{roleName} 1. 修改多语言  2. 修改角色 3. 修改角色权限* \n@param roleId  角色Id\n* @param sqlNo  序号\n* @param langResId 多语言表的Id\n* @param rolePId 角色父类ID\n* @param roleName  角色的名字\n* @param rolesPermitJson 角色权限"
            ,"url":"/roles/doUpdateRole/{roleId}/{sqlNo}/{langResId}/{rolePId}/{roleName}"
            ,"method":"POST"
            ,"parameters": '[{"func_id":1,"visible":1,"enabled":1},{"func_id":2,"visible":1,"enabled":1},{"func_id":3,"visible":1,"enabled":1},{"func_id":4,"visible":1,"enabled":1}]'
            ,"example_url":"/roles/doUpdateRole/12/12/116/8/韩武洽二号"
            ,"example_body":""
            ,"example_result":"{}"
		}
		,
		{
			"title":"角色权限 查询角色权限  /findRolesPermitByRoleId"
            ,"desc":"findRolesPermitByRoleId/{roleId} \n@param roleId 角色id"
            ,"url":"findRolesPermitByRoleId/{roleId}"
            ,"method":"POST"
            ,"parameters": ""
            ,"example_url":"/rolesPermit/findRolesPermitByRoleId/4"
            ,"example_body":""
            ,"example_result":"{}"
		}
    ]
    ;

