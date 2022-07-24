(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{530:function(t,_,v){"use strict";v.r(_);var a=v(16),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"tidb体系架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tidb体系架构"}},[t._v("#")]),t._v(" TiDB体系架构")]),t._v(" "),v("h2",{attrs:{id:"_1-我们到底需要一个什么样的数据库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-我们到底需要一个什么样的数据库"}},[t._v("#")]),t._v(" 1. 我们到底需要一个什么样的数据库")]),t._v(" "),v("ol",[v("li",[t._v("分布式关系型数据库设计的六大目标：横向扩展、强一致及高可用、标准SQL与事务模型、云原生、HTAP、生态兼容性")]),t._v(" "),v("li",[t._v("硬件、尤其是网络的发展推动了计算与存储分离的架构")]),t._v(" "),v("li",[t._v("TiDB是高度分层的架构")])]),t._v(" "),v("p",[v("strong",[t._v("HTAP：")])]),t._v(" "),v("p",[t._v("数据库系统一般可以按照负载类型分成操作型数据库（Operational Support System）和决策型数据库（Decision Support System）。操作型数据库主要用于应对日常流水类业务，主要是面向消费者类的业务；决策型数据库主要应对的是企业报表类，可视化等统计类业务，主要面向企业类的业务。")]),t._v(" "),v("p",[t._v("针对两类系统的数据管理和系统设计方式都有很大差异。  (1）对OLTP的数据模型采用基本的约束E-R图模型，而OLAP的数据模型则需要采用特殊的“星型模型”，数据立方等数据仓库相关的技术。  （2）对OLTP的数据存储通常采用行式组织，而OLAP采用列式组织。  （3）OLTP的业务通常对实时要求比OLAP高很多。  （4）传统的数据库，为了同时支持两类业务。通常采用两个数据源, 分别对两套系统进行优化设计。")]),t._v(" "),v("p",[t._v("OLTP的数据定期会通过etl（提取，转换，加载）工具把数据同步导入OLAP系统中。这就涉及到数据源滞后的问题。 OLAP的数据滞后，导致分析出来的结果时效性不够，对决策支持类系统的要求不够。比如说，双11期间，用户购物的行为和推荐系统的推荐结果之间的时间差越短，越有可能提高销量。")]),t._v(" "),v("p",[t._v("HTAP是混合 OLTP 和 OLAP 业务同时处理的系统，2014年Garnter公司给出了严格的定义：混合事务/分析处理(HTAP)是一种新兴的应用体系结构，它打破了事务处理和分析之间的“墙”。它支持更多的信息和“实时业务”的决策。")]),t._v(" "),v("p",[t._v("直接在单一数据源上不加区分的处理TP和AP的方案，目前还不能有效实现。")]),t._v(" "),v("p",[t._v("当前的方案是进行一个折中。采用快照的方式，分开处理OLTP和OLAP请求。让OLAP的请求在OLTP的最新的一致性快照上执行。同时对外暴露一套接口，从而从逻辑来看是一套系统。虽然内部是分开处理OLTP和OLAP的。")]),t._v(" "),v("p",[t._v("这种折衷方案，重要的一点，就是保证快照是尽可能的保持“新”，快照不能太过滞后OLTP的数据。这就需要系统频繁的做快照操作。")]),t._v(" "),v("h2",{attrs:{id:"_2-如何构建一个分布式存储系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何构建一个分布式存储系统"}},[t._v("#")]),t._v(" 2. 如何构建一个分布式存储系统")]),t._v(" "),v("h3",{attrs:{id:"我们需要一个怎样的数据引擎"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#我们需要一个怎样的数据引擎"}},[t._v("#")]),t._v(" 我们需要一个怎样的数据引擎")]),t._v(" "),v("ol",[v("li",[t._v("更细粒度的弹性扩容")]),t._v(" "),v("li",[t._v("高并发读写")]),t._v(" "),v("li",[t._v("数据不丢不错")]),t._v(" "),v("li",[t._v("多副本保障一致性和高可用")]),t._v(" "),v("li",[t._v("支持分布式事务")])]),t._v(" "),v("h3",{attrs:{id:"b-tree缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#b-tree缺点"}},[t._v("#")]),t._v(" B-Tree缺点")]),t._v(" "),v("p",[t._v("在传统的OLTP系统里，写入是最昂贵的成本。")]),t._v(" "),v("ol",[v("li",[t._v("B-Tree至少要写两次数据，一次是预写日志WAL ("),v("code",[t._v("Write-ahead logging")]),t._v(")，一次是写入树本身")]),t._v(" "),v("li",[t._v("B-Tree是一个严格平衡的数据结构，对读友好，相对于写入来说不太好")]),t._v(" "),v("li",[t._v("在传统的主从架构里，不管你加多少个从节点，集群的写入容量无法扩展，上限取决于硬件，扩容只能通过类似分库的概念来进行")])]),t._v(" "),v("h2",{attrs:{id:"_3-如何构建一个分布式sql引擎"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何构建一个分布式sql引擎"}},[t._v("#")]),t._v(" 3. 如何构建一个分布式SQL引擎")]),t._v(" "),v("p",[t._v("SQL是一个非过程的声明性语言，不注重过程，只注重结果。")]),t._v(" "),v("h2",{attrs:{id:"_4-基于分布式架构的htap数据库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-基于分布式架构的htap数据库"}},[t._v("#")]),t._v(" 4. 基于分布式架构的HTAP数据库")])])}),[],!1,null,null,null);_.default=r.exports}}]);