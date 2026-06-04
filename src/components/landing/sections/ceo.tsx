import { type DictKey } from "@/lib/i18n";

import { T } from "../lang-provider";
import { Reveal } from "../reveal";

// fill = share of deals still alive entering the stage; leak = lost within it.
const stages: { title: DictKey; desc: DictKey; fill: string; reach: string; leak: string }[] = [
  { title: "ceo_s1_t", desc: "ceo_s1_d", fill: "100%", reach: "100%", leak: "−28%" },
  { title: "ceo_s2_t", desc: "ceo_s2_d", fill: "72%", reach: "72%", leak: "−33%" },
  { title: "ceo_s3_t", desc: "ceo_s3_d", fill: "48%", reach: "48%", leak: "−27%" },
];

export function Ceo() {
  return (
    <section className="section" id="ceo" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" style={{ background: "var(--blue)" }} />
            <span>
              <T k="ceo_eyebrow" />
            </span>
          </span>
          <h2 className="h2">
            <T k="ceo_h2" />
          </h2>
          <p className="lede">
            <T k="ceo_lede" />
          </p>
        </Reveal>
        <div className="funnel">
          {stages.map((s) => (
            <Reveal key={s.title} className="funnel-row">
              <div className="funnel-stage">
                <div className="sn">
                  <T k={s.title} />
                </div>
                <div className="sd">
                  <T k={s.desc} />
                </div>
              </div>
              <div className="funnel-track">
                <div className="funnel-fill" style={{ "--fill": s.fill } as React.CSSProperties}>
                  {s.reach} <span style={{ opacity: 0.8, marginLeft: 6 }}>
                    · <T k="ceo_conv_l" />
                  </span>
                </div>
              </div>
              <div className="funnel-leak">
                <div className="lv">{s.leak}</div>
                <div className="ll">
                  <T k="ceo_leak_l" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
