import { mutationField, nonNull } from 'nexus'

export const CampaignMemberStatusUpsertOneMutation = mutationField(
  'upsertOneCampaignMemberStatus',
  {
    type: nonNull('CampaignMemberStatus'),
    args: {
      where: nonNull('CampaignMemberStatusWhereUniqueInput'),
      create: nonNull('CampaignMemberStatusCreateInput'),
      update: nonNull('CampaignMemberStatusUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.campaignMemberStatus.upsert({
        ...args,
        ...select,
      })
    },
  },
)
