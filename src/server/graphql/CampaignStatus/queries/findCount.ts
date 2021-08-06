import { queryField, nonNull, list } from 'nexus'

export const CampaignStatusFindCountQuery = queryField(
  'findManyCampaignStatusCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'CampaignStatusWhereInput',
      orderBy: list('CampaignStatusOrderByInput'),
      cursor: 'CampaignStatusWhereUniqueInput',
      distinct: 'CampaignStatusScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.campaignStatus.count(args as any)
    },
  },
)
