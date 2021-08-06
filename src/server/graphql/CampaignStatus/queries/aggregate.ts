import { queryField, list } from 'nexus'

export const CampaignStatusAggregateQuery = queryField(
  'aggregateCampaignStatus',
  {
    type: 'AggregateCampaignStatus',
    args: {
      where: 'CampaignStatusWhereInput',
      orderBy: list('CampaignStatusOrderByInput'),
      cursor: 'CampaignStatusWhereUniqueInput',
      distinct: 'CampaignStatusScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.campaignStatus.aggregate({ ...args, ...select }) as any
    },
  },
)
