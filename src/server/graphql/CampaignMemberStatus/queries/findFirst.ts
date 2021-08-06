import { queryField, list } from 'nexus'

export const CampaignMemberStatusFindFirstQuery = queryField(
  'findFirstCampaignMemberStatus',
  {
    type: 'CampaignMemberStatus',
    args: {
      where: 'CampaignMemberStatusWhereInput',
      orderBy: list('CampaignMemberStatusOrderByInput'),
      cursor: 'CampaignMemberStatusWhereUniqueInput',
      distinct: 'CampaignMemberStatusScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.campaignMemberStatus.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
