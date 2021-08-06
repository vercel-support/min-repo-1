import { queryField, nonNull, list } from 'nexus'

export const CampaignFindManyQuery = queryField('findManyCampaign', {
  type: nonNull(list(nonNull('Campaign'))),
  args: {
    where: 'CampaignWhereInput',
    orderBy: list('CampaignOrderByInput'),
    cursor: 'CampaignWhereUniqueInput',
    distinct: 'CampaignScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.campaign.findMany({
      ...args,
      ...select,
    })
  },
})
