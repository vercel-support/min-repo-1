import { queryField, nonNull, list } from 'nexus'

export const CampaignMemberFindManyQuery = queryField(
  'findManyCampaignMember',
  {
    type: nonNull(list(nonNull('CampaignMember'))),
    args: {
      where: 'CampaignMemberWhereInput',
      orderBy: list('CampaignMemberOrderByInput'),
      cursor: 'CampaignMemberWhereUniqueInput',
      distinct: 'CampaignMemberScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.campaignMember.findMany({
        ...args,
        ...select,
      })
    },
  },
)
