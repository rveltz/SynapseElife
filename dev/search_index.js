var documenterSearchIndex = {"docs":
[{"location":"library/#Library-1","page":"Library","title":"Library","text":"","category":"section"},{"location":"library/#Parameters-1","page":"Library","title":"Parameters","text":"","category":"section"},{"location":"library/#","page":"Library","title":"Library","text":"PreSynapseParams","category":"page"},{"location":"library/#Synapse.PreSynapseParams","page":"Library","title":"Synapse.PreSynapseParams","text":"struct PreSynapseParams\n\nPresynaptic parameters\n\nFiring events are processed separately from the main simulation (at src/OnlyStp.jl) it takes the firing structure as input from the function firingPattern.\nUsing the presynaptic stimulation times, the vesicle depletion and AP induced by EPSP are estimated, however one can use a tag to deactivate it (covering sub-threshold EPSP cases) as in  dataProtocol.\nThe presynaptic part of our model is phenomenological, for instance, the variable Soma in src/OnlyStp.jl:38 was made to represent the voltage and can accumulate for faster frequencies but has an abstract unit.\n\nEquations\n\nbased on D. Sterratt et al book; Principles of Computational Modelling in Neuroscience page 183 \n\nraterec  = (R_0 - R) ⋅ τ_R ⋅ rrp \n\nraterrp  = (D_0 - D) ⋅ τ_D ⋅ rec \n\nrateref  = (R_0 - R) ⋅ ref_dt \n\nFields\n\nτ_rec\nrecovery constant of pre calcium decay function Default: 20000\nδ_ca\nfraction of decay constant of pre calcium decay f Default: 0.0004\nτ_pre\ndecay time constant of pre calcium Default: 20\nτ_V\ndecay time constant for AP induced by EPSP Default: 40\nδ_delay_AP\ndelay to EPSPs onset and evoked AP Default: 15.0\nD_0\ninitial conditions ready releaseble pool Default: 25\nR_0\ninitial conditions recovery pool Default: 30\nτ_R\nrate for D -> R Default: 5000\nτ_D\nrate for R -> D Default: 45000\nτ_R_ref\nrate for infinite reservoir -> R Default: 40000\ns\nsigmoid parameter for release probability Default: 2.0\nh\nsigmoid parameter for release probability Default: 0.7\nsampling_rate\nsampling rate for plotting / printing Default: 1.0\n\n\n\n\n\n","category":"type"},{"location":"library/#","page":"Library","title":"Library","text":"SynapseParams","category":"page"},{"location":"library/#Synapse.SynapseParams","page":"Library","title":"Synapse.SynapseParams","text":"struct SynapseParams{Tp}\n\nPostsynaptic parameters.\n\n\n\nUnits\n\ntime: ms\nlength: µm (area µm^2, volume µm^3)\nvoltage: mV\ncurrent: pA\nconductance: nS\nresistance: GOhm\ncapacitance: pF ( ms.pA/mV = ms.nS = ms/GOhm)\nconcentration: µM\n\n\n\nFields\n\nLTP_region\nRegion LTP Default: VPolygon([[6.35, 1.4], [10, 1.4], [6.35, 29.5], [10, 29.5]])\nLTD_region\nRegion LTD Default: VPolygon([[6.35, 1.4], [6.35, 23.25], [6.35, 29.5], [1.85, 11.327205882352938], [1.85, 23.25], [3.7650354609929075, 1.4], [5.650675675675676, 29.5]])\na_D\nACTIVATION RATES FOR THRESHOLDS Default: 0.1\nb_D\nDefault: 2.0e-5\na_P\nDefault: 0.2\nb_P\nDefault: 0.0001\nt_D\nDefault: 18000\nt_P\nDefault: 13000\nK_D\nSigmoids controlling the rate of plasticity change Default: 80000.0\nK_P\nDefault: 13000.0\nrest_plstcty\nPlasticity states Default: 100\nt_end\nSIMULATION Default: 100\nsampling_rate\nDefault: 10\ntemp_rates\nBIOPHYSICAL AND GHK PARAMETERS Default: 35.0\nage\nDefault: 60.0\nfaraday\nDefault: 0.096485 * 0.001\nCa_ext\nDefault: 2500.0\nCa_infty\nDefault: 0.05\ntau_ca\nDefault: 10.0\nD_Ca\nDefault: 0.3338\nf_Ca\nDefault: 0.1\nperm\nDefault: -0.04583333333333333\nz\nDefault: 2.0\ngas\nDefault: 8.314e-6\np_release\nDefault: (0.004225803293622208, 1708.4124496514878, 1.3499793762587964, 0.6540248201173222)\ntrec\nBACKPROPAGATION ATTENUATION Default: 2000\ntrec_soma\nDefault: 500\ndelta_decay\nDefault: 1.7279e-5\np_age_decay_bap\nDefault: (0.13525468256031167, 16.482800452454164, 5.564691354645679)\ndelta_soma\nDefault: 2.5e-5 * (pagedecaybap[3] / (1 + exp(pagedecaybap[1] * (age - pagedecay_bap[2]))))\ndelta_aux\nDefault: 2.304e-5\ninjbap\nDefault: 2.0\nsoma_dist\nDefault: 200.0\np_dist\nDefault: (0.019719018173341547, 230.3206470553394, 1.4313810030893268, 0.10406540965358434)\nϕ_dist\nDefault: pdist[4] + pdist[3] / (1 + exp(pdist[1] * (somadist - p_dist[2])))\nI_clamp\nDefault: 0.0\ngamma_Na\nNa and K Default: 800.0\nErev_Na\nDefault: 50.0\ngamma_K\nDefault: 40.0\nErev_K\nDefault: -90.0\np_nmda_frwd\nNMDAr temperature modification Default: (-0.09991802053299291, -37.63132907014948, 1239.0673283348326, -1230.6805720050966)\nfrwd_T_chng_NMDA\nDefault: pnmdafrwd[4] + pnmdafrwd[3] / (1 + exp(pnmdafrwd[1] * (temprates - pnmda_frwd[2])))\np_nmda_bcwd\nDefault: (-0.10605060141396823, 98.99939433046647, 1621.6168608608068, 3.0368551011554143)\nbcwd_T_chng_NMDA\nDefault: pnmdabcwd[4] + pnmdabcwd[3] / (1 + exp(pnmdabcwd[1] * (temprates - pnmda_bcwd[2])))\nNMDA_N2A_ka\nNMDAr kinetics (GluN2A type) Default: frwdTchng_NMDA * 34.0 * 0.001\nNMDA_N2A_kb\nDefault: frwdTchng_NMDA * 17.0 * 0.001\nNMDA_N2A_kc\nDefault: frwdTchng_NMDA * 127.0 * 0.001\nNMDA_N2A_kd\nDefault: frwdTchng_NMDA * 580.0 * 0.001\nNMDA_N2A_ke\nDefault: frwdTchng_NMDA * 2508.0 * 0.001\nNMDA_N2A_kf\nDefault: frwdTchng_NMDA * 3449.0 * 0.001\nNMDA_N2A_k_f\nDefault: bcwdTchng_NMDA * 662.0 * 0.001\nNMDA_N2A_k_e\nDefault: bcwdTchng_NMDA * 2167.0 * 0.001\nNMDA_N2A_k_d\nDefault: bcwdTchng_NMDA * 2610.0 * 0.001\nNMDA_N2A_k_c\nDefault: bcwdTchng_NMDA * 161.0 * 0.001\nNMDA_N2A_k_b\nDefault: bcwdTchng_NMDA * 120.0 * 0.001\nNMDA_N2A_k_a\nDefault: bcwdTchng_NMDA * 60.0 * 0.001\nNMDA_N2B_sa\nNMDAr kinetics (GluN2B type) Default: frwdTchng_NMDA * 0.25 * 34.0 * 0.001\nNMDA_N2B_sb\nDefault: frwdTchng_NMDA * 0.25 * 17.0 * 0.001\nNMDA_N2B_sc\nDefault: frwdTchng_NMDA * 0.25 * 127.0 * 0.001\nNMDA_N2B_sd\nDefault: frwdTchng_NMDA * 0.25 * 580.0 * 0.001\nNMDA_N2B_se\nDefault: frwdTchng_NMDA * 0.25 * 2508.0 * 0.001\nNMDA_N2B_sf\nDefault: frwdTchng_NMDA * 0.25 * 3449.0 * 0.001\nNMDA_N2B_s_f\nDefault: bcwdTchng_NMDA * 0.23 * 662.0 * 0.001\nNMDA_N2B_s_e\nDefault: bcwdTchng_NMDA * 0.23 * 2167.0 * 0.001\nNMDA_N2B_s_d\nDefault: bcwdTchng_NMDA * 0.23 * 2610.0 * 0.001\nNMDA_N2B_s_c\nDefault: bcwdTchng_NMDA * 0.23 * 161.0 * 0.001\nNMDA_N2B_s_b\nDefault: bcwdTchng_NMDA * 0.23 * 120.0 * 0.001\nNMDA_N2B_s_a\nDefault: bcwdTchng_NMDA * 0.23 * 60.0 * 0.001\np_nmda\nDefault: (0.004477162852447629, 2701.3929349701334, 58.38819453272428, 33.949463268365555)\ngamma_nmda\nDefault: (pnmda[4] + pnmda[3] / (1 + exp(pnmda[1] * (Caext - p_nmda[2])))) * 0.001\np_age\nDefault: (0.09993657672916968, 25.102347872464193, 0.9642137892004939, 0.5075183905839776)\nr_NMDA_age\nRatio N2B/N2A Default: rand(Normal(0, 0.05)) + page[4] + page[3] / (1 + exp(page[1] * (age - page[2])))\nN_NMDA\nDefault: 15\nN_N2B\nDefault: round((NNMDA * rNMDAage) / (rNMDA_age + 1))\nN_N2A\nDefault: round(NNMDA / (rNMDA_age + 1))\nErev_nmda\nOther NMDAr parameters Default: 0.0\nMg\nDefault: 1.0\np_ampa_frwd\nAMPAr temperature modification Default: (-0.4737773089201679, 31.7248285571622, 10.273135485873242)\nfrwd_T_chng_AMPA\nDefault: pampafrwd[3] / (1 + exp(pampafrwd[1] * (temprates - pampa_frwd[2])))\np_ampa_bcwd\nDefault: (-0.36705555170278986, 28.976662403966674, 5.134547217640794)\nbcwd_T_chng_AMPA\nDefault: pampabcwd[3] / (1 + exp(pampabcwd[1] * (temprates - pampa_bcwd[2])))\nAMPA_k1\n** AMPAr kinetics  Default: frwdTchng_AMPA * 1.6 * 1.0e7 * 1.0e-6 * 0.001\nAMPA_k_1\nDefault: bcwdTchng_AMPA * 7400 * 0.001\nAMPA_k_2\nDefault: bcwdTchng_AMPA * 0.41 * 0.001\nAMPA_alpha\nDefault: 2600 * 0.001\nAMPA_beta\nDefault: 9600 * 0.001\nAMPA_delta_1\nDefault: 1500 * 0.001\nAMPA_gamma_1\nDefault: 9.1 * 0.001\nAMPA_delta_2\nDefault: 170 * 0.001\nAMPA_gamma_2\nDefault: 42 * 0.001\nAMPA_delta_0\nDefault: 0.003 * 0.001\nAMPA_gamma_0\nDefault: 0.83 * 0.001\ngamma_ampa1\nAMPAr conductances Default: 0.5 * 0.031\ngamma_ampa2\nDefault: 0.5 * 0.052\ngamma_ampa3\nDefault: 0.5 * 0.073\nN_ampa\nDefault: 120\nErev_ampa\nDefault: 0.0\nN_GABA\nGABAr Default: 34\np_Cl\nDefault: (0.09151696057098718, 0.6919298240788684, 243.5159017060495, -92.6496083089155)\nErev_Cl\nGABAr, Cl reversal potential Default: pCl[4] + pCl[3] / (1 + exp(pCl[1] * (age - pCl[2])))\ngamma_GABA\nDefault: 0.035\nGABA_r_b1\nDefault: 1.0e6 * 1.0e-6 * 0.001 * 20\nGABA_r_u1\nDefault: 1000.0 * 0.0046\nGABA_r_b2\nDefault: 1.0e6 * 1.0e-6 * 0.001 * 10\nGABA_r_u2\nDefault: 1000.0 * 0.0092\nGABA_r_ro1\nDefault: 1000.0 * 0.0033\nGABA_r_ro2\nDefault: 1000.0 * 0.0106\np_GABA\nDefault: (0.19127068198185954, 32.16771140618756, -1.2798050197287802, 1.470692263981145)\nGABA_r_c1\nDefault: (pGABA[4] + pGABA[3] / (1 + exp(pGABA[1] * (temprates - p_GABA[2])))) * 1000.0 * 0.0098\nGABA_r_c2\nDefault: (pGABA[4] + pGABA[3] / (1 + exp(pGABA[1] * (temprates - p_GABA[2])))) * 0.4\nE_leak\nPassive electrical properties Default: -70.0\ng_leak\nDefault: 4.0e-6\nCm\nDefault: 0.006\nR_a\nDefault: 0.01\nD_dend\n** MORPHOLOGY: Dendritic properties** Default: 2.0\nL_dend\nDefault: 1400\nA_dend\nDefault: 2 * pi * (Ddend / 2) * Ldend\nVol_dend\nDefault: pi * (Ddend / 2) ^ 2 * Ldend\nCdend\nDefault: Cm * A_dend\nCS_dend\nDefault: pi * (D_dend / 2) .^ 2\ng_leakdend\nDefault: gleak * Adend\nD_soma\nMORPHOLOGY: Soma properties Default: 30\nA_soma\nDefault: pi * D_soma ^ 2\nCsoma\nDefault: Cm * A_soma\nCS_soma\nDefault: pi * (D_soma / 2) .^ 2\ng_leaksoma\nDefault: 15.0\ng_diff\nDefault: Ddend / (4Ra)\nVol_sp\nSpine properties Default: 0.03\nA_sp\nDefault: 4 * pi * ((3Vol_sp) / (4pi)) ^ (2.0 / 3.0)\nCsp\nDefault: Cm * A_sp\ng_leaksp\nDefault: gleak * Asp\nD_neck\nNeck properties Default: 0.1\nL_neck\nDefault: 0.2\nCS_neck\nDefault: pi * (D_neck / 2) .^ 2\ng_neck\nDefault: CSneck / (Lneck * R_a)\ntau_diff\nDefault: Volsp / (2 * DCa * Dneck) + Lneck ^ 2 / (2D_Ca)\nglu_width\nSYNAPTIC GLUTAMATE TRANSIENT PARAMETERS Default: 1.0\nglu_amp\nDefault: 1000.0\nglu_cv\nDefault: 0.5\nN_SK\nSK channels Default: 15\nSK_gamma\nDefault: 0.01\nSK_Erev\nDefault: -90\nSK_gating_half\nDefault: 0.33\nSK_time\nDefault: 6.3\nSK_hill\nDefault: 6\np_SK_bcwd\nDefault: (0.09391588258147192, 98.85165844770867, -147.61669527876904, 149.37767054612135)\nbcwd_SK\nDefault: pSKbcwd[4] + pSKbcwd[3] / (1 + exp(pSKbcwd[1] * (temprates - pSK_bcwd[2])))\np_SK_frwd\nDefault: (-0.334167923607112, 25.590920461511878, 2.2052151559841193, 0.005904170174699533)\nfrwd_SK\nDefault: pSKfrwd[4] + pSKfrwd[3] / (1 + exp(pSKfrwd[1] * (temprates - pSK_frwd[2])))\nCaM_con\n**Concentrations Default: 30.0\nmKCaM_con\nDefault: 70.0\nmCaN_con\nDefault: 20.0\nkon_1C\nChang Pepke model - CaM reactions I Default: 0.005\nkoff_1C\nDefault: 0.05\nkon_2C\nDefault: 0.01\nkoff_2C\nDefault: 0.01\nkon_1N\nDefault: 0.1\nkoff_1N\nDefault: 2.0\nkon_2N\nDefault: 0.2\nkoff_2N\nDefault: 0.5\nkf_CaM0\nChang Pepke model - CaM reactions II Default: 3.8e-6\nkb_CaM0\nDefault: 0.0055\nkf_CaM2C\nDefault: 0.00092\nkb_CaM2C\nDefault: 0.0068\nkf_CaM2N\nDefault: 0.00012\nkb_CaM2N\nDefault: 0.0017\nkf_CaM4\nDefault: 0.03\nkb_CaM4\nDefault: 0.0015\nkon_K1C\nChang Pepke model - CaMKII reactions Default: 0.044\nkoff_K1C\nDefault: 0.033\nkon_K2C\nDefault: 0.044\nkoff_K2C\nDefault: 0.0008\nkon_K1N\nDefault: 0.076\nkoff_K1N\nDefault: 0.3\nkon_K2N\nDefault: 0.076\nkoff_K2N\nDefault: 0.02\np_camkii_q10\nChang Pepke model - autophosphorilation Default: (0.5118207068695309, 45.47503600542303, -161.42634157226917, 162.1718925882677)\nq10\nDefault: pcamkiiq10[4] + pcamkiiq10[3] / (1 + exp(pcamkiiq10[1] * (temprates - pcamkii_q10[2])))\nk1\nDefault: 0.0126\nk2\nDefault: q10 * 0.00033\nk3\nDefault: 4 * q10 * 0.00017\nk4\nDefault: 4 * 4.1e-5\nk5\nDefault: 4 * q10 * 2 * 1.7e-5\np_CaN_frwd\nCaM-CaN reactions Default: (-0.29481489145354556, 29.999999999999968, 0.15940019940354327, 0.870299900298228)\nkcanf\nDefault: (pCaNfrwd[4] + pCaNfrwd[3] / (1 + exp(pCaNfrwd[1] * (temprates - pCaN_frwd[2])))) * 0.0175\np_CaN_bcwd\nDefault: (-0.6833299932488973, 26.277500129849113, 0.7114524682690591, 0.29037766196937326)\nkcanb\nDefault: (pCaNbcwd[4] + pCaNbcwd[3] / (1 + exp(pCaNbcwd[1] * (temprates - pCaN_bcwd[2])))) * 2.0e-5\np_frwd_VGCC\nVGCCs Default: (1.0485098341579628, 30.66869198447378, -0.3040010721391852, 2.5032059559264357)\nfrwd_VGCC\nDefault: pfrwdVGCC[4] + pfrwdVGCC[3] / (1 + exp(pfrwdVGCC[1] * (temprates - pfrwd_VGCC[2])))\np_bcwd_VGCC\nDefault: (-0.3302682317933842, 36.279019647221226, 3.2259761593440155, 0.7298285671937866)\nbcwd_VGCC\nDefault: pbcwdVGCC[4] + pbcwdVGCC[3] / (1 + exp(pbcwdVGCC[1] * (temprates - pbcwd_VGCC[2])))\nErev_CaT\nDefault: 10.0\nErev_CaR\nDefault: 10.0\nErev_CaL\nDefault: 10.0\ngamma_CaT\nDefault: 0.012\ngamma_CaR\nDefault: 0.017\ngamma_CaL\nDefault: 0.027\nN_caT\nDefault: 3\nN_caR\nDefault: 3\nN_caL\nDefault: 3\nEGTA_kf\nCalcium dye and buffers Default: 0.0027\nEGTA_kb\nDefault: 0.18 * EGTA_kf\nEGTA_con\nDefault: 0.0\nBAPTA_kf\nDefault: 0.45\nBAPTA_kb\nDefault: 0.176BAPTA_kf\nBAPTA_con\nDefault: 0.0\nImbuf_k_on\nDefault: 0.247\nImbuf_k_off\nDefault: 0.524\nK_buff_diss\nDefault: Imbufkoff / Imbufkon\nImbuf_con\nDefault: 62\nImbuf_con_dend\nDefault: Imbuf_con * 4\nogb1_kf\nCalcium fluorescent dyes Default: 0.8\nogb1_kb\nDefault: 0.16\nfluo4_kf\nDefault: 0.8\nfluo4_kb\nDefault: 0.24\ndye\nDefault: 0.0\nfluo5f_kf\nDefault: dye * 0.01\nfluo5f_kb\nDefault: dye * 26 * fluo5f_kf\nfluo5f_con\nDefault: dye * 200.0\n\n\n\n\n\n","category":"type"},{"location":"library/#Protocols-1","page":"Library","title":"Protocols","text":"","category":"section"},{"location":"library/#","page":"Library","title":"Library","text":"firingPattern","category":"page"},{"location":"library/#Synapse.firingPattern","page":"Library","title":"Synapse.firingPattern","text":"firingPattern(; start_time, n_pre, delay_pre, n_pos, delay_pos, delay, pulse, freq, causal, repeat_times, repeat_after)\n\n\nCompute external stimulation times and indices for pre/post stimulation. Usually used with dataProtocol (see folder examples in examples/).\n\nOutput\n\nevent_times sorted list of external event times\nis_pre_or_post_index whether the external events are pre (true) or post (false)\n\n\n\n\n\n","category":"function"},{"location":"library/#","page":"Library","title":"Library","text":"dataProtocol","category":"page"},{"location":"library/#Synapse.dataProtocol","page":"Library","title":"Synapse.dataProtocol","text":"dataProtocol(paper)\n\n\nStructure to describe a plasticity protocol\n\nArguments\n\nn_pre number of presynaptic pulses\ndelay_pre delay between presynaptic pulses\nn_pos number of postsynaptic pulses\ndelay_pos delay between postsynaptic pulses\ndelay delay between pre and postsynaptic spikes (used in STDP)\npulse number of pulses/pairing repetitions\nfreq frequency\ncausal causal inverts the order of pre and post, uses true or false\nprotocol name of the protocol\nweight info entry with weight change value (not used in the model)\noutcome String to show the qualitative outcome (not used in the model)\npaper paper is a String to choose a predefined protocol (e.g. paper = TigaretMellor16)\ntemp temperature by which all temperature-sensitive mechanisms will be adapted\ninjection (nA) current injected in the soma, used to make postsynaptic spikes (BaPs)\nexca (μM) extracellular calcium, we expressed it in μM to be used in the ghk function\nexmg (mM) extracellular magnesium, we expressed it in mM, however, it is converted to μM in the magnesium relief function\nrepeat_times number of epochs additional epochs to include, for instance, TBS is usually expressed in epochs\nrepeat_after time difference between the epochs (ms)\ntesting_freq some protocols use test frequencies, this can be useful to evaluate the effect or absence of it, or to add a regular background presynaptic stimuli. 0 Hz will turn it off\ninj_time duration (ms) of the current injection to elicit a BaP\nage animal age (rat)\nAP_by_EPSP yes or no, to let additional BaPS induced by EPSPs to be included in the stimulation\nGABA_block yes or no GABAr conductance is set zero\njitter standard deviation of a Gaussian used to jitter the spikes\nsparse percentage of spikes skipped\ndista distance from the soma in μm\n\n\n\n\n\n","category":"function"},{"location":"library/#Pre-synaptic-simulation-1","page":"Library","title":"Pre-synaptic simulation","text":"","category":"section"},{"location":"library/#","page":"Library","title":"Library","text":"stp","category":"page"},{"location":"library/#Synapse.stp","page":"Library","title":"Synapse.stp","text":"stp(t_end, param, all_events_times, is_pre_or_post_index; _plot, nu_stp, kwargs...)\n\n\nThis function performs the simulation of the presynaptic side.\n\nArguments:\n\nt_end end of simulation time\nparam named tuple with parameters, example: (τ_rec = 20000, δ_decay\t= .0004, tau_pre = 20, tau_soma = 40)\nall_events_times sorted list of times of external events\nis_pre_or_post_index whether the external events are pre (true) or post (false)\n\nKeyword arguments\n\n_plot = false whether to plot the result or not\nnu_stp = stp_build_transition_matrix() transition matrix\n\nOutput\n\nis_glu_release true (success) or false (failure), list of presynaptic stimuli in all_events_index that led to a vesicle (glutamate) release\nD, also (XD[2,:]), the evolution of the docked pool\nR, also (XD[3,:]), the evolution of the reserve pool\ntime simulation times\nglu_release_times the vector of times in which a successful releases (glutamate) occurred\nbap_by_epsp_times the vector of times in which an AP was triggered by an EPSP\n\n\n\n\n\n","category":"function"},{"location":"library/#Post-synaptic-simulation-1","page":"Library","title":"Post-synaptic simulation","text":"","category":"section"},{"location":"library/#","page":"Library","title":"Library","text":"evolveSynapse","category":"page"},{"location":"library/#Synapse.evolveSynapse","page":"Library","title":"Synapse.evolveSynapse","text":"evolveSynapse(xc0, xd0, p_synapse, events_sorted_times, is_pre_or_post_event, bap_by_epsp, is_glu_released, algos; verbose, progress, abstol, reltol, save_positions, nu, kwargs...)\n\n\nPerform a simulation of the synapse model. Among other things, you need to provide the external events impacting the synapse: Glutamate releases and BaPs.\n\nArguments\n\nxc0 initial condition for the continuous variables. Example xc0 = Synapse.initial_conditions_continuous_temp(p_synapse)\nxd0 initial condition for the discrete variables. Example xd0 = Synapse.initial_conditions_discrete(p_synapse)\np_synapse::SynapseParams synapse parameters. Example p_synapse = SynapseParams().\nevents_sorted_times sorted list of times (ms) for external events (Glutamate / BaP)\nis_pre_or_post_event::Vector{Bool} whether the corresponding event in events_sorted_times is a Glutamate event. If false, it corresponds to a BaP event.\nbap_by_epsp::Vector{<:Real} Additionnal BaPs time events, these are evoked by EPSPs. There are added to the ones indexed in is_events_glu.\nis_glu_released::Vector{Bool} variable to shut down the Glutamate event, i.e. make the glutamate amplitude be zero. This proves useful to have this variable for reproducing some experiments. If equals to false, then glutamate amplitude is set to zero.\nalgos simulation algorithms from PiecewiseDeterministicMarkovProcesses. For example (PDMP.CHV(:lsoda), PDMP.CHV(:lsoda))\n\nOptional arguments\n\nverbose = false display information during simulation\nabstol = 1e-8 absolute tolerance for ODE time stepper\nreltol = 1e-7 relative tolerance for ODE time stepper\nprogress = false show a progressbar during simulation\nsave_positions = (false, true) save the values (before, after) the jumps (transitions)\nnu transition matrix. It is initialised with buildTransitionMatrix().\n\n\n\n\n\n","category":"function"},{"location":"library/#Utils-1","page":"Library","title":"Utils","text":"","category":"section"},{"location":"library/#","page":"Library","title":"Library","text":"Synapse.statistics_jumps","category":"page"},{"location":"library/#Synapse.statistics_jumps","page":"Library","title":"Synapse.statistics_jumps","text":"Returns the number of jumps for each component and t ∈ stpan. Usefull to determine who jumps the most. The syntax is as follows\n\nstatistics_jumps(t, xd; tspan)\n\n\nwhere t is time, xd the discrete component and It is an inferior bound on t. You can use it like\n\nstatistics_jumps(t, out[:ampa])\n\n\n\n\n\n","category":"function"},{"location":"library/#","page":"Library","title":"Library","text":"Synapse.get_names","category":"page"},{"location":"library/#Synapse.get_names","page":"Library","title":"Synapse.get_names","text":"Returns a dictionary out from a simulation with associated names like out[:ampa]. Use it like\n\nget_names(xc, xd)\n\n\nAnother use is for plotting.\n\n\n\n\n\n","category":"function"},{"location":"library/#","page":"Library","title":"Library","text":"Synapse.plot_variable","category":"page"},{"location":"library/#Synapse.plot_variable","page":"Library","title":"Synapse.plot_variable","text":"plot_variable(tt, xc, xd)\nplot_variable(tt, xc, xd, s; tspan, kwargs...)\n\n\nPlotting function\n\nArguments\n\ntt times\nxc continuous variable\nxd discrete variable\ns::Symbol = :ampa which variable to plot. Must be :ampa, :nmda, :vgcc_t, :vgcc_r, :vgcc_l or :Vsp,:Vdend,:Vsoma,:λ,:ImbufCa,:Ca,:Dye,:CaM0,:CaM2C,:CaM2N,:CaM4,:mCaN,:CaN4,:mKCaM,:KCaM0,:KCaM2N,:KCaM2C,:KCaM4,:PCaM0,:PCaM2C,:PCaM2N,:PCaM4,:P,:P2,:LTD,:LTP,:LTD_act,:LTP_act,:m,:h,:n,:SK,:λ_age,:λ_aux.\n\nOptional arguments\n\nall arguments from Plots.jl. For example xlims=(0,10), legend=false\n\n\n\n\n\n","category":"function"},{"location":"library/#","page":"Library","title":"Library","text":"Synapse.plot_discrete","category":"page"},{"location":"library/#Synapse.plot_discrete","page":"Library","title":"Synapse.plot_discrete","text":"plot_discrete(tt, xc, xd; tspan, kwargs...)\n\n\nPlot all discrete variables.\n\nArguments\n\ntt times\nxc continuous variables (result from PDMP)\nxd discrete variables (result from PDMP)\n\nOptional arguments\n\nall arguments from Plots.jl. For example xlims = (0, 10), legend = false\n\n\n\n\n\n","category":"function"},{"location":"library/#Automatic-Code-generation-1","page":"Library","title":"Automatic Code generation","text":"","category":"section"},{"location":"library/#","page":"Library","title":"Library","text":"Synapse.extractReactionsCamKII","category":"page"},{"location":"library/#Synapse.extractReactionsCamKII","page":"Library","title":"Synapse.extractReactionsCamKII","text":"extractReactionsCamKII()\nextractReactionsCamKII(filename)\n\n\nThis function extracts the differential equations from the CaM-CaMKII-CaN reactions and write it into the file with name filename = \"write-equation.txt\". The outcome of this function is used to write the F_synapse.\n\n\n\n\n\n","category":"function"},{"location":"#Synapse.jl-1","page":"Home","title":"Synapse.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"This is the main repository for the Synapse simulation package written in Julia language. The associated publication is here on BiorXiv.","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"To run the package Synapse, we need some bleeding edge versions of other packages.","category":"page"},{"location":"#Installation-from-website-1","page":"Home","title":"Installation from website","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"To install the package, please run","category":"page"},{"location":"#","page":"Home","title":"Home","text":"pkg> add PiecewiseDeterministicMarkovProcesses#master\npkg> add https://github.com/rveltz/SynapseElife.git","category":"page"},{"location":"#","page":"Home","title":"Home","text":"You can then use it like","category":"page"},{"location":"#","page":"Home","title":"Home","text":"using Synapse","category":"page"},{"location":"#Packages-for-Figure1-and-Figure2-1","page":"Home","title":"Packages for Figure1 and Figure2","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"The following packages must be installed (only once) to run examples/Figure1.jl:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"pkg> add Revise Random Plots ColorSchemes Parameters","category":"page"},{"location":"#","page":"Home","title":"Home","text":"The following packages must be installed (only once) to run examples/Figure2.jl:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"pkg> add Revise Random Plots ColorSchemes Parameters","category":"page"}]
}
