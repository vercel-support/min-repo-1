import { queryField, nonNull, list } from 'nexus'

export const CampaignMemberStatusFindManyQuery = queryField(
  'findManyCampaignMemberStatus',
  {
    type: nonNull(list(nonNull('CampaignMemberStatus'))),
    args: {
      where: 'CampaignMemberStatusWhereInput',
      orderBy: list('CampaignMemberStatusOrderByInput'),
      cursor: 'CampaignMemberStatusWhereUniqueInput',
      distinct: 'CampaignMemberStatusScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.campaignMemberStatus.findMany({
        ...args,
        ...select,
      })
    },
  },
)
