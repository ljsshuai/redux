import React from 'react';
import '../../../js/bootstrap.min';
import './regulation_article.css'
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
class ReulationArticle extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div id='page-wrapper'>
                <div className="report_list">
                    <div className="list_nav"><a href="/regulation">政策法规</a>/<span>详情</span></div>
                    <div className="report_title">
                        <div>
                            <h1>北京市人民政府办公厅印发</h1>
                    <h1>《关于进一步提升生活性服务业品质的工作方案》的通知</h1>
                        </div>
                    </div>
                    <div style={{padding:'20px'}}><div style={{display:'inline-block'}}>文章来源：</div><div style={{float:'right',display:'inline-block'}}>发布时间2018-5-3</div></div>
                    <div style={{padding:'20px'}}>
                      北京市人民政府办公厅印发《关于进一步提升生活性服务业品质的工作方案》的通知



                        京政办发〔2018〕10号



                        各区人民政府，市政府各委、办、局，各市属机构：

                        《关于进一步提升生活性服务业品质的工作方案》已经市政府同意，现印发给你们，请认真组织实施。



                        北京市人民政府办公厅

                        2018年3月24日



                        关于进一步提升生活性服务业品质的工作方案



                        为优化蔬菜零售、便利店(社区超市)、早餐、快递、便民维修、家政服务、美容美发、洗染等基本便民商业服务，进一步提升本市生活性服务业品质，特制定本方案。

                        一、总体要求

                        全面深入学习贯彻党的十九大精神，以习近平新时代中国特色社会主义思想为指导，坚持以人民为中心，充分发挥市场在资源配置中的决定性作用和更好发挥政府作用，准确把握生活性服务业的商业性和公益性双重属性，着力推进生活性服务业“规范化、连锁化、便利化、品牌化、特色化、智能化”(以下简称“六化”)发展，满足人民群众便利性、多样性生活需要，为建设国际一流的和谐宜居之都提供有力支撑。

                        二、主要任务

                        (一)合理规划布局生活性服务业设施

                        各区政府要结合自身实际，在充分听取市民意见建议的基础上，编制本区生活性服务业设施规划，分业态、分社区研究制定补建提升措施，把规划细化落实到每个街道(乡镇)、社区。对因无证无照或开墙打洞等原因即将关闭或清退的基本便民商业服务设施，应将相关信息及补建方案通过多种形式告知市民；对于新建基本便民商业服务设施，要主动邀请市民参与，广泛听取意见建议，使之更加符合市民需求。(责任单位：各区政府、市商务委、市规划国土委；完成时限：2018年9月底前)各区政府在推进疏解整治促提升专项行动过程中，要加强部门信息共享和协调联动，做到疏解整治和生活性服务业品质提升统一研究、统一谋划、统一部署、统一实施；在研究制定腾退空间利用规划时，要参照居住配套商业服务设施配置标准，优先布局符合“六化”方向的生活性服务业设施。抓紧制定出台利用腾退地下空间补充基本便民商业服务设施的指导意见。经过努力，2018年底前实现全市平均每个行政社区蔬菜零售网点数量不少于2个的目标。(责任单位：各区政府、市商务委、市规划国土委、市民防局)

                        (二)强化生活性服务业设施规范化建设管理

                        市有关部门要细化居住配套商业服务设施配置标准；充分考虑蔬菜零售、便利店(社区超市)、早餐、快递、便民维修、家政服务等基本便民商业服务设施的公益属性，研究制定居住配套商业服务设施规划建设使用管理办法，明确商务部门全程参与新建住宅小区配套商业服务设施的规划设计、建设、验收、交付使用等各环节工作，确保配套商业服务设施与住宅同步建设、同步验收、同步交付使用。(责任单位：市规划国土委、市住房城乡建设委、市商务委、市财政局；完成时限：2018年6月底前)对于规划已确定用于生活性服务业的设施，不得改变用途；已经改变用途的，要尽快恢复。(责任单位：各区政府、市规划国土委)市有关部门要加强引导，推动市属国有企业在完善基本便民商业服务设施方面发挥示范作用。(责任单位：各区政府、市规划国土委、市商务委、市国资委)

                        (三)妥善做好农副产品市场升级改造

                        对于农副产品市场要以规范、改造、提升为主；对不符合规划、消防等要求确需撤除的，各区政府要按照“撤一补一”的原则，提前制定替代方案，保障总体服务面积和服务功能不变。(责任单位：各区政府)市有关部门要创新工作思路，在规划编制、资金支持、证照办理等方面加大扶持力度，为农副产品市场升级改造提供保障。(责任单位：市商务委、市规划国土委、市公安局消防局、市工商局、市环保局)

                        (四)创新便民商业服务模式

                        鼓励运用现代科技手段推动生活性服务业发展，支持发展无人便利店等零售新模式。支持品牌连锁早餐企业依托固定门店，探索采取“中央厨房+统一配送+现场制售”等方式，在社区开展早餐经营。鼓励品牌连锁餐饮企业延长营业时间，为市民提供优质的夜间餐饮服务，打造“深夜食堂”。引导和支持品牌连锁企业在社区打造一批便民商业服务综合体和社区商业“E中心”。鼓励在商业服务设施及社区、高等学校、写字楼内提供末端配送服务。制作生活性服务业网点电子地图，方便市民查询。(责任单位：市商务委、市工商局、市食品药品监管局、市环保局、市城市管理委、市城管执法局)

                        (五)不断提高“一刻钟社区服务圈”建设水平

                        进一步丰富服务内容，力争2020年底前在所有“一刻钟社区服务圈”实现蔬菜零售、便利店(社区超市)、早餐等基本便民商业服务功能，鼓励销售净菜、半净菜。进一步扩大“一刻钟社区服务圈”覆盖面，在推进城市社区全覆盖的基础上，逐步向城乡结合部和农村地区延伸，加快生活性服务业城乡一体化进程。(责任单位：市商务委、市社会办)

                        (六)优化证照办理和标志管理服务

                        开展生活性服务业新模式、新业态经营主体准入改革试点，推动生活性服务业品牌连锁企业“一区一照”注册登记工作。为品牌连锁餐饮企业开辟绿色通道，进一步缩短《食品经营许可证》办理时间。对于便民维修、家政服务等生活性服务业领域的品牌连锁企业设立的门店，以及腾退空间用于基本便民商业服务的设施，满足环保、消防等要求的，在证照办理方面给予支持。(责任单位：市商务委、市规划国土委、市住房城乡建设委、市公安局消防局、市工商局、市食品药品监管局、市环保局)规范商业设施标志管理，生活性服务业品牌连锁企业门店可以在每个独立出入口设置一块牌匾标识，生活性服务业老字号企业门店可以使用传统样式牌匾，早餐工程门店应当使用统一标识的灯箱或牌匾。(责任单位：市商务委、市城市管理委、市城管执法局)

                        (七)推进生活性服务业标准化工作

                        生活性服务业各行业主管部门要对本行业(领域)的法律、法规、规章、规范及标准进行梳理分析，研究提出地方标准建设方案，细化年度任务，扎实组织实施。继续开展质量标杆引领和品牌创建活动，引导企业制定品牌发展战略，实施标准化管理，带动服务水平提升。

                        (八)加强从业人员培训

                        建立完善政府、行业协会、企业多方参与的多层次职业技能培训体系，进一步丰富和规范培训内容，创新培训形式，提高从业人员素质，提升行业整体服务水平。继续开展商业服务业服务技能大赛活动，以赛促训提升岗位技能。积极组织开展生活性服务业岗位技能素质提升、养老护理员培训、巾帼家政专项培训等活动。引导和鼓励生活性服务业企业对从业人员开展业务培训。

                        三、保障措施

                        (一)加强组织领导

                        进一步发挥市提高生活性服务业品质工作小组作用，完善工作机制，加强工作指导、组织协调和监督检查，统筹研究解决生活性服务业发展中的重点难点问题；工作小组办公室设在市商务委，负责日常协调工作。市有关部门、各区政府要认真履行职责，密切协作配合，确保各项任务有效落实。

                        (二)加大财税支持力度

                        研究制定跨区经营连锁企业“总部纳税、跨区分配”的具体办法。(责任单位：市财政局、市国税局、市地税局)探索对符合“六化”要求的蔬菜零售、便利店(社区超市)、早餐等生活性服务业企业的网点租金等费用给予支持。充分发挥北京生活性服务业发展基金作用，进一步加大对生活性服务业设施、公共服务平台等建设运营的支持力度。研究设立本市商贸流通和生活性服务业担保资金，对生活性服务业企业提供融资支持。(责任单位：市商务委、市财政局、各区政府；完成时限：2018年底前)加大税收政策宣传解读力度，实现增值税进项税额“应抵尽抵”，进一步减轻生活性服务业企业负担。(责任单位：市国税局、市地税局)支持符合条件的生活性服务业企业上市融资或发行债券。落实好市政府固定资产投资补助基本便民商业服务设施相关政策。(责任单位：市金融局、市发展改革委、市商务委按照职责分工负责)

                        (三)强化市场监管

                        建立健全以诚信为核心的生活性服务业企业监管制度，深入开展价格诚信、质量诚信、计量诚信、文明经商等活动，依法依规查处生活性服务业领域制售假冒伪劣商品、侵犯知识产权、价格欺诈、计量作弊等行为，营造安全、放心的消费环境。建立健全生活性服务业企业“黑红名单”制度，激励诚信、惩戒失信。(责任单位：市打击侵权假冒工作领导小组各成员单位)

                        (四)加强统计监测

                        抓紧完善生活性服务业统计制度和指标体系，探索发布北京生活性服务业发展指数。建立行业主管部门统计调查制度，形成统计部门和行业主管部门互为补充的生活性服务业统计调查体系，提高统计数据的科学性和准确性。加强部门之间信息和数据共享，利用大数据分析研究生活性服务业发展趋势，为相关决策提供支撑。

                        (五)严格督查考核

                        将生活性服务业品质提升工作纳入市政府与各区政府签订的目标责任书和市政府对各区政府绩效考评范围，探索建立第三方绩效评估机制，客观评价生活性服务业品质提升工作成效。市商务委要会同市政府督查室加强对本工作方案落实情况的督促检查，推动各项任务落实。
                    </div>
                </div>
            </div>
        );
    }
}
export default ReulationArticle;