import { mutationField, nonNull } from 'nexus'

export const CampaignMemberStatusUpdateOneMutation = mutationField(
  'updateOneCampaignMemberStatus',
  {
    type: nonNull('CampaignMemberStatus'),
    args: {
      where: nonNull('CampaignMemberStatusWhereUniqueInput'),
      data: nonNull('CampaignMemberStatusUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.campaignMemberStatus.update({
        where,
        data,
        ...select,
      })
    },
  },
)
