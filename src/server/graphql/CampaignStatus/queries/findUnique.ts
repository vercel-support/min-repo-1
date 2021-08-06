import { queryField, nonNull } from 'nexus'

export const CampaignStatusFindUniqueQuery = queryField(
  'findUniqueCampaignStatus',
  {
    type: 'CampaignStatus',
    args: {
      where: nonNull('CampaignStatusWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.campaignStatus.findUnique({
        where,
        ...select,
      })
    },
  },
)
