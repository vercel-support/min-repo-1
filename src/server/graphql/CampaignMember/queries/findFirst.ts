import { queryField, list } from 'nexus'

export const CampaignMemberFindFirstQuery = queryField(
  'findFirstCampaignMember',
  {
    type: 'CampaignMember',
    args: {
      where: 'CampaignMemberWhereInput',
      orderBy: list('CampaignMemberOrderByInput'),
      cursor: 'CampaignMemberWhereUniqueInput',
      distinct: 'CampaignMemberScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.campaignMember.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
