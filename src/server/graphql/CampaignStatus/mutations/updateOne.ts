import { mutationField, nonNull } from 'nexus'

export const CampaignStatusUpdateOneMutation = mutationField(
  'updateOneCampaignStatus',
  {
    type: nonNull('CampaignStatus'),
    args: {
      where: nonNull('CampaignStatusWhereUniqueInput'),
      data: nonNull('CampaignStatusUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.campaignStatus.update({
        where,
        data,
        ...select,
      })
    },
  },
)
