import { queryField, list } from 'nexus'

export const CampaignStatusFindFirstQuery = queryField(
  'findFirstCampaignStatus',
  {
    type: 'CampaignStatus',
    args: {
      where: 'CampaignStatusWhereInput',
      orderBy: list('CampaignStatusOrderByInput'),
      cursor: 'CampaignStatusWhereUniqueInput',
      distinct: 'CampaignStatusScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.campaignStatus.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
