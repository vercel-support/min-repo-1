import { mutationField, nonNull } from 'nexus'

export const CampaignMemberCreateOneMutation = mutationField(
  'createOneCampaignMember',
  {
    type: nonNull('CampaignMember'),
    args: {
      data: nonNull('CampaignMemberCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.campaignMember.create({
        data,
        ...select,
      })
    },
  },
)
