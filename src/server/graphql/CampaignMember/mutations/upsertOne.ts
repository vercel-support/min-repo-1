import { mutationField, nonNull } from 'nexus'

export const CampaignMemberUpsertOneMutation = mutationField(
  'upsertOneCampaignMember',
  {
    type: nonNull('CampaignMember'),
    args: {
      where: nonNull('CampaignMemberWhereUniqueInput'),
      create: nonNull('CampaignMemberCreateInput'),
      update: nonNull('CampaignMemberUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.campaignMember.upsert({
        ...args,
        ...select,
      })
    },
  },
)
