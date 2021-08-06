import { queryField, nonNull, list } from 'nexus'

export const CampaignStatusFindManyQuery = queryField(
  'findManyCampaignStatus',
  {
    type: nonNull(list(nonNull('CampaignStatus'))),
    args: {
      where: 'CampaignStatusWhereInput',
      orderBy: list('CampaignStatusOrderByInput'),
      cursor: 'CampaignStatusWhereUniqueInput',
      distinct: 'CampaignStatusScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.campaignStatus.findMany({
        ...args,
        ...select,
      })
    },
  },
)
