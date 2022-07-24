(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{452:function(e,t,c){"use strict";c.r(t);var v=c(16),s=Object(v.a)({},(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[c("h1",{attrs:{id:"mvcc和临键锁"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#mvcc和临键锁"}},[e._v("#")]),e._v(" MVCC和临键锁")]),e._v(" "),c("p",[e._v("在mysql中，提供了两种事务隔离技术，第一个是"),c("strong",[e._v("mvcc")]),e._v("，第二个是"),c("strong",[e._v("next-key")]),e._v("技术。这个在使用不同的语句的时候可以动态选择。不加"),c("code",[e._v("lock inshare mode")]),e._v("之类的快照读就使用mvcc。否则 当前读使用next-key。mvcc的优势是不加锁，并发性高。缺点是不是实时数据。next-key的优势是获取实时数据，但是需要加锁。")]),e._v(" "),c("p",[e._v("另外，重要：")]),e._v(" "),c("p",[e._v("在rr级别下，mvcc完全解决了重复读，但并不能真正的完全避免幻读，只是在部分场景下利用历史数据规避了幻读；")]),e._v(" "),c("p",[e._v("对于快照读，mysql使用mvcc利用历史数据部分避免了幻读（在某些场景看上去规避了幻读）")]),e._v(" "),c("blockquote",[c("p",[e._v("例如A事务无锁 select 快照，B事务增删改数据，A事务再 "),c("code",[e._v("select lock inshare mode")]),e._v(" 或者 "),c("code",[e._v("select for update")]),e._v("，那么此时就不返回快照了，而是返回当前读；")])]),e._v(" "),c("p",[e._v("要完全避免，需要手动加锁将快照读调整为当前读（mysql不会自动加锁），然后mysql使用next-key完全避免了幻读，比如rr下，锁1（0，2，3，4），另一个线程的insert 3即被阻塞，在rc下，另一个线程仍然可以大摇大摆的插入，如本线程再次查询比如count，则会不一致。")])])}),[],!1,null,null,null);t.default=s.exports}}]);