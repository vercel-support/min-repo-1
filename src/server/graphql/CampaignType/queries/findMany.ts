import { queryField, nonNull, list } from 'nexus'

export const CampaignTypeFindManyQuery = queryField('findManyCampaignType', {
  type: nonNull(list(nonNull('CampaignType'))),
  args: {
    where: 'CampaignTypeWhereInput',
    orderBy: list('CampaignTypeOrderByInput'),
    cursor: 'CampaignTypeWhereUniqueInput',
    distinct: 'CampaignTypeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.campaignType.findMany({
      ...args,
      ...select,
    })
  },
})
