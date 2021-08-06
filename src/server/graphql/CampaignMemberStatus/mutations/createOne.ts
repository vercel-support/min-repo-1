import { mutationField, nonNull } from 'nexus'

export const CampaignMemberStatusCreateOneMutation = mutationField(
  'createOneCampaignMemberStatus',
  {
    type: nonNull('CampaignMemberStatus'),
    args: {
      data: nonNull('CampaignMemberStatusCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.campaignMemberStatus.create({
        data,
        ...select,
      })
    },
  },
)
